import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from 'src/app/component/template/confirm-delete/confirm-delete.component';
import { Venda } from 'src/app/model/venda.model';
import { VendaService } from 'src/app/service/venda.service';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  vendas: Venda[] = [];
  displayedColumns: string[] = ['id', 'comprador', 'dataVenda', 'tipoPagamento','qtdPrestacao','concluido','acao']

  constructor(
    private service : VendaService,
    private dialog: MatDialog
  ) { }

  atualizarDados(): void {
    this.service.findAll().subscribe(vendas => {
      this.vendas = vendas;
    });
  }

  ngOnInit(): void {
    this.atualizarDados();
  }

  excluir(venda: Venda): void{

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir a venda ${venda.idVenda}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if(confirm){
        this.service.delete(venda).subscribe(() => {
          this.service.showMessage("Venda excluída com sucesso!");
          this.atualizarDados();
        });
      }
    })
    
  }
}
