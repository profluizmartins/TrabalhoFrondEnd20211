import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core' 
import { MatPaginator } from '@angular/material/paginator' 
import { MatDialog } from '@angular/material/dialog' 
import { MatTableDataSource } from '@angular/material/table' 
import { MatSort, Sort } from '@angular/material/sort' 
import { ProdutoEstoque } from '../../../../model/produtoEstoque.model'
import { ProdutoEstoqueService } from '../../../../service/ProdutoEstoque.service'
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { waitForAsync } from '@angular/core/testing'

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.component.html',
  styleUrls: ['./estoque-list.component.css']
})
export class EstoqueListComponent implements AfterViewInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  filterValue!: string

  produtoEstoques: ProdutoEstoque[] = []
  displayedColumns: string[] = ['idProdutoEstoque', 'grupo', 'nmProduto', 'prUnitario', 'qtdEstoque', 'qtdReservada'] 
  // dataSource!: MatTableDataSource<ProdutoEstoque> 

  @ViewChild(MatPaginator) paginator!: MatPaginator 
  @ViewChild(MatSort) sort!: MatSort 

  constructor( 
    private service: ProdutoEstoqueService,

  ) { }

  formatarValor(valor: number) {
    return valor.toFixed(2).replace('.', ',')
  }

  // atualizarDados(): void{
  //   this.service.findAll().subscribe(produtos => {
  //     this.dataSource = new MatTableDataSource(produtos)
  //     this.dataSource.paginator = this.paginator
  //     this.dataSource.sort = this.sort
  //   })

  // }

  atualizarDadosPage(): void {
    // this.service.findAllPaginator(
    //     this.sort.active,
    //     this.sort.direction,
    //     this.paginator.pageIndex, 
    //     this.paginator.pageSize,
    //     this.filterValue
    // ).subscribe(data => {
    //   console.log(data)
    //   this.resultsLength = data.totalElements
    //   this.dataSource = new MatTableDataSource(data.content)
    //   this.dataSource.paginator = this.paginator
    //   this.dataSource.sort = this.sort
    // })
    
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0)

    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
              startWith({}),
              switchMap(() => {
                this.isLoadingResults = true;
                return this.service.findAllPaginator(
                      this.sort.active, 
                      this.sort.direction, 
                      this.paginator.pageIndex, 
                      this.paginator.pageSize,
                      this.filterValue
                ).pipe(catchError(() => observableOf(null)))
              }),
              map(data => {
                  this.isLoadingResults = false
                  this.isRateLimitReached = data ===null
                  // console.log(data)
                  if (data === null) {
                    return []
                  }

                  this.resultsLength = data.totalElements
                  // console.log(this.resultsLength)
                  return data.content
                })
        ).subscribe((produtos => {
      this.produtoEstoques = produtos
      // console.log(produtos)
    }))

  }

  ngAfterViewInit() {
    this.atualizarDadosPage()
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase()
    this.paginator.pageIndex = 0
    this.atualizarDadosPage()
    // this.dataSource.filter = this.filterValue
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage()
    // }
  }

}
