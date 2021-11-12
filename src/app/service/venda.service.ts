import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from "rxjs";
import {Venda} from "../model/venda.model";

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  urlBase: string = "http://localhost:8080/vendas/";
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',{
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(venda: Venda) : Observable<Venda> {
    return this.http.post<Venda>(this.urlBase, venda)
  }

  findAll() : Observable<Venda[]> {
    return this.http.get<Venda[]>(this.urlBase);
  }

  findById(id: string) : Observable<Venda> {
    return this.http.get<Venda>(this.urlBase + id);
  }

  update(venda: Venda) : Observable<Venda> {
    return this.http.put<Venda>(this.urlBase, venda)
  }

  delete(venda: Venda): Observable<Venda> {
    return this.http.delete<Venda>(this.urlBase + venda.idVenda)
  }
}
