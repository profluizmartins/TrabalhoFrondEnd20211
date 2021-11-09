import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/model/pagamento.model';
import { Router } from '@angular/router';
import { PagamentoService } from '../../../../service/pagamento.service';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent implements OnInit {
  
  titulo: string = "Cadastrar novo Pagamento";

  pagamento: Pagamento = {
    id_venda_pagamento: 0,
    data_pagamento: "",
    valor_pagamento: 0, 
    venda_id: 0
  }

  constructor(
    private service: PagamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
      this.service.create(this.pagamento).subscribe(() =>{
      this.service.showMessage("Pagamento cadastrado com sucesso!")
      this.router.navigate(['/pagamento']);
    });
  }

}