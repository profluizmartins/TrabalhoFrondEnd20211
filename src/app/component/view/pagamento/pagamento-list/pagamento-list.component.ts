import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PagamentoService } from 'src/app/service/pagamento.service';
import { Pagamento } from '../model/pagamento';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.css'],
})
export class PagamentoListComponent implements OnInit {
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  filterValue!: string;

  pagamentos: Pagamento[] = [];
  displayedColumns: string[] = [
    'idProduto',
    'nome',
    'status',
    'nmProduto',
    'quantidade',
    'valor',
    'total',
  ];
  // dataSource!: MatTableDataSource<ProdutoEstoque>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PagamentoService) {}

  ngOnInit(): void {
    // this.service.findAll().subscribe((data) => {
    //   this.pagamentos = data;
    // });
    this.pagamentos = [
      {
        id: '1',
        nome: 'Jairo',
        nomeDoProduto: 'Viagra',
        quantidade: 2,
        valor: 15,
        total: 30,
        status: 'aprovado',
      },
      {
        id: '2',
        nome: 'Joshua',
        nomeDoProduto: 'Viagra',
        quantidade: 2,
        valor: 15,
        total: 30,
        status: 'aprovado',
      },
      {
        id: '3',
        nome: 'Mauricio',
        nomeDoProduto: 'Viagra',
        quantidade: 2,
        valor: 15,
        total: 30,
        status: 'aprovado',
      },
      {
        id: '4',
        nome: 'Gabriel',
        nomeDoProduto: 'Viagra',
        quantidade: 2,
        valor: 15,
        total: 30,
        status: 'aprovado',
      },
      {
        id: '5',
        nome: 'Xaolim matador de porco',
        nomeDoProduto: 'Viagra',
        quantidade: 2,
        valor: 15,
        total: 30,
        status: 'aprovado',
      },
    ];
  }

  applyFilter(event: any) {
    console.log('filtrar', event);
  }
}
