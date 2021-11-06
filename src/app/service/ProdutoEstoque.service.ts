import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ProdutoEstoque } from '../model/produtoEstoque.model'
import { produtoEstoquePage } from '../model/produtoEstoquePage.model';

@Injectable({
    providedIn: 'root'
})

export class ProdutoEstoqueService {
    urlBase: string = "http://localhost:8080/produtoEstoque"

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "Fechar",
            {
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 3000,
                panelClass: isError ? ['msg-error'] : ['msg-success']
            }
        )

    }

    findAll(): Observable<ProdutoEstoque[]> {
        return this.http.get<ProdutoEstoque[]>(this.urlBase)
    }

    findAllPaginator(sort: string, order: SortDirection, page: number, size: number, filter: string): Observable<produtoEstoquePage> {
        // console.log(sort);
        // console.log(order);
        
        
        if (filter === undefined) {
            filter = ''
        }

        let url: string
        
        if (sort === undefined  || order === '') {
            url = `${this.urlBase}/page/?nmProduto=${filter}&page=${page}&size=${size}`
        } else if (sort === 'idProdutoEstoque' || sort === 'qtdEstoque' || sort === 'qtdReservada') {
            url = `${this.urlBase}/page/?nmProduto=${filter}&page=${page}&size=${size}&sort=${sort},${order}`
        } else {
            url = `${this.urlBase}/page/?nmProduto=${filter}&page=${page}&size=${size}&sort=produto.${sort},${order}`
        }

        // console.log(url)        
        return this.http.get<produtoEstoquePage>(url)
    }
}