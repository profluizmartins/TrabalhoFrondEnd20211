import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from 'src/app/service/pagamento.service';
import { Pagamento } from '../model/pagamento';

@Component({
  selector: 'app-criar-pagamento',
  templateUrl: './criar-pagamento.component.html',
  styleUrls: ['./criar-pagamento.component.css'],
})
export class CriarPagamentoComponent implements OnInit {
  titulo: string = 'Cadastrar novo Pagamento';

  pagamento: any = {
    id_venda_pagamento: 0,
    data_pagamento: '',
    valor_pagamento: 0,
    venda_id: 0,
  };

  constructor(private service: PagamentoService, private router: Router) {}

  ngOnInit(): void {}

  salvar(): void {
    this.service.create(this.pagamento).subscribe(() => {
      this.service.showMessage('Pagamento cadastrado com sucesso!');
      this.router.navigate(['/pagamento']);
    });
  }
}
