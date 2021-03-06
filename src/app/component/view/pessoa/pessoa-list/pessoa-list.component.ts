import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Pessoa} from "../../../../model/pessoa.model";
import {MatSort} from "@angular/material/sort";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {merge, of as observableOf} from "rxjs";
import {PessoaService} from "../../../../service/pessoa.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDeleteComponent} from "../../../template/confirm-delete/confirm-delete.component";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements AfterViewInit {
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  pessoas: Pessoa[] = []
  displayedColumns: string[] = ['ID', 'nome', 'endereco', 'acao'];
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(public service: PessoaService, private dialog: MatDialog) { }

  excluir(pessoa: Pessoa): void{
    const dialogRef = this.dialog.open(ConfirmDeleteComponent,{
      data: {
        message: `Deseja realmente excluir a pessoa ${pessoa.nome}?`,
        buttonText:{
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if (confirm){
        this.service.delete(pessoa).subscribe(() =>{
            this.service.showMessage("Pessoa excluida com sucesso")
          },
          err => {
            this.service.showMessage("Não foi possivel excluir a pessoa", true)
          });
      }
      else{
        this.service.showMessage("Operação de exclusão de pessoa cancelada!")
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
      ).subscribe(data => this.pessoas = data);
  }

}

