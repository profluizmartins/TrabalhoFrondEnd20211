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
  novoArray: any = [];
  arrayPagamento: any = [];

  filterValue!: string;

  pagamentos: Pagamento[] = [];
  displayedColumns: string[] = [
    'idVendaPagamento',
    'dtPagamento',
    'vlPagamento',
    'status'
  ];
  // dataSource!: MatTableDataSource<ProdutoEstoque>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PagamentoService) {}

  ngOnInit(): void {
    this.service.getPagamentosAprovados().subscribe((data) => {
      this.pagamentos = data;

    for (var i = 0; i < this.pagamentos.length; i = i + 5) {
      this.novoArray.push(this.pagamentos.slice(i, i + 5));
    }
    this.arrayPagamento = this.novoArray[0] ?? []
    });
  }

  getPage(event: any) {
    this.arrayPagamento = this.novoArray[event.pageIndex];
  }

  applyFilter(event: any) {
    console.log('filtrar', event);
  }
}
