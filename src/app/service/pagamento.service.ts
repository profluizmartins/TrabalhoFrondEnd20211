import { Pagamento } from '../model/pagamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  urlBase: string = "http://localhost:8080/pagamento";
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',
    {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    }
    )
  }

  // CREATE
  create(pagamento: Pagamento) : Observable<Pagamento>{
    return this.http.post<Pagamento>(this.urlBase, pagamento);
  }

  // READ
    // findAll
    findAll() : Observable<Pagamento[]> {
        return this.http.get<Pagamento[]>(this.urlBase);
    }
    // findById
    findById(id: string ) : Observable<Pagamento>{
      let url = `${this.urlBase}/${id}`;
      return this.http.get<Pagamento>(url);
    }

  // UPDATE
  update(pagamento: Pagamento) : Observable<Pagamento>{
    return this.http.put<Pagamento>(this.urlBase, pagamento);
  }


  // DELETE

  delete(pagamento: Pagamento): Observable<Pagamento>{
    let url = `${this.urlBase}/${pagamento.id_venda_pagamento}`;
    console.log(url);
    return this.http.delete<Pagamento>(url);
  }
}