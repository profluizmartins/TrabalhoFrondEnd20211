import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PessoaJuridica} from "../../../../model/pessoaJuridica.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PessoaJuridicaService} from "../../../../service/pessoa-juridica.service";
import {MatDialog} from "@angular/material/dialog";
import {Pessoa} from "../../../../model/pessoa.model";
import {ConfirmDeleteComponent} from "../../../template/confirm-delete/confirm-delete.component";
import {merge, of as observableOf} from "rxjs";
import {catchError, map, startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-pessoa-juridica-list',
  templateUrl: './pessoa-juridica-list.component.html',
  styleUrls: ['./pessoa-juridica-list.component.css']
})
export class PessoaJuridicaListComponent implements AfterViewInit {
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  pessoasJuridicas: PessoaJuridica[] = []
  displayedColumns: string[] = ['idPessoaJuridica', 'nome', 'cnpj','atividade', 'acao'];
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: PessoaJuridicaService, private dialog: MatDialog) { }

  excluir(pessoaJuridica: PessoaJuridica): void{
    const dialogRef = this.dialog.open(ConfirmDeleteComponent,{
      data: {
        message: `Deseja realmente excluir a pessoa juridica ${pessoaJuridica.idPessoaJuridica}?`,
        buttonText:{
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if (confirm){
        this.service.delete(pessoaJuridica).subscribe(() =>{
            this.service.showMessage("Pessoa juridica excluida com sucesso")
          },
          err => {
            this.service.showMessage("Não foi possivel excluir a pessoa juridica", true)
          });
      }
      else{
        this.service.showMessage("Operação de exclusão de pessoa juridica cancelada!")
      }
    })
  }

  ngAfterViewInit() {



    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {

          this.isLoadingResults = true;
          return this.service.findPaginator(
            this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          console.log(data)
          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.totalElements;
          return data.content;
        })
      ).subscribe(data => this.pessoasJuridicas = data);
  }
}

