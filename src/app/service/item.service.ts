import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  urlBase: string = "http://localhost:8080/itens/";

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

create(item: Item) : Observable<Item> {
  return this.http.post<Item>(this.urlBase, item)
}

findAll() : Observable<Item[]> {
  return this.http.get<Item[]>(this.urlBase);
}

findById(id: string) : Observable<Item> {
  return this.http.get<Item>(this.urlBase + id);
}

update(venda: Item) : Observable<Item> {
  return this.http.put<Item>(this.urlBase, venda)
}

delete(item: Item): Observable<Item> {
  return this.http.delete<Item>(this.urlBase + item.idVendaProduto)
}
}
