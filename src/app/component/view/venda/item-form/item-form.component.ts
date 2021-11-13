import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  titulo: string = "Cadastrar Item";
  start = new Date(Date.now());
  item: Item = {
    venda: {
    comprador: {
      nome: "",
      endereco: ""
    },
    dataVenda: this.start,
    tipoPagamento: "",
    qtdPrestacao: 0,
    concluido: false
  },
  produto: "",
  precoVendaProduto: 0,
  quantidade: 0
  }

  constructor(
    private service: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.item).subscribe(() =>{
      this.service.showMessage("Item inserido com sucesso!")
      this.router.navigate(['/itens']);
    });
  }

}
