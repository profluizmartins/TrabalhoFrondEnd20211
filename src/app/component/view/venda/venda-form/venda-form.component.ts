import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from 'src/app/model/venda.model';
import { VendaService } from 'src/app/service/venda.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent implements OnInit {

  titulo: string = "Cadastrar nova Venda";
  start = new Date(Date.now());

  venda: Venda = {
    comprador: {
      nome: "",
      endereco: ""
    },
    dataVenda: this.start,
    tipoPagamento: "",
    qtdPrestacao: 0,
    concluido: false
  }

  constructor(
    private service: VendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.venda).subscribe(() =>{
      this.service.showMessage("Venda cadastrada com sucesso!")
      this.router.navigate(['/venda']);
    });
  }

}
