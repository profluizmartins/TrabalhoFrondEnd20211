import { Injectable } from '@angular/core';
import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../model/pessoa.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PessoaApi} from "../component/view/pessoa/pessoa-list/pessoa.api";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  urlBase: string = "http://localhost:8080/pessoas/";
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',{
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(pessoa: Pessoa) : Observable<Pessoa> {
    return this.http.post<Pessoa>(this.urlBase, pessoa)
  }

  findAll() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.urlBase);
  }

  findById(id: string) : Observable<Pessoa> {
    return this.http.get<Pessoa>(this.urlBase + id);
  }

  update(pessoa: Pessoa) : Observable<Pessoa> {
    return this.http.put<Pessoa>(this.urlBase, pessoa)
  }

  delete(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.urlBase + pessoa.idPessoa)
  }

  findPaginator(sort: string, order: SortDirection, page: number, size: number): Observable<PessoaApi> {
    //?sort=${sort}&order=${order}&page=${page + 1}
    let requestUrl =
      `${this.urlBase}/paginator/?page=${page}&size=${size}`;
    //&sort=${sort}&order=${order}

    requestUrl += order == 'desc' ? '&sort='+sort : '&unsort='+sort;
    return this.http.get<PessoaApi>(requestUrl);
  }
}
