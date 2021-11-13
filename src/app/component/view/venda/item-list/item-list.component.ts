import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from 'src/app/component/template/confirm-delete/confirm-delete.component';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itens: Item[] = [];
  displayedColumns: string[] = ['id', 'venda', 'produto', 'precoVendaProduto','quantidade','acao']

  constructor(
    private service : ItemService,
    private dialog: MatDialog
  ) { }

  atualizarDados(): void {
    this.service.findAll().subscribe(itens => {
      this.itens = itens;
    });
  }

  ngOnInit(): void {
    this.atualizarDados();
  }

  excluir(item: Item): void{

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir o item ${item.idVendaProduto}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if(confirm){
        this.service.delete(item).subscribe(() => {
          this.service.showMessage("Item excluído com sucesso!");
          this.atualizarDados();
        });
      }
    })
    
  }

}
