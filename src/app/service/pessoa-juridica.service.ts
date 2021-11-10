import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SortDirection} from "@angular/material/sort";
import {PessoaJuridica} from "../model/pessoaJuridica.model";
import {PessoaJuridicaApi} from "../component/view/pessoaJuridica/pessoa-juridica-list/pessoa-juridica.api";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  urlBase: string = "http://localhost:8080/pessoasJuridicas/";
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',{
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(pessoaJuridica: PessoaJuridica) : Observable<PessoaJuridica> {
    return this.http.post<PessoaJuridica>(this.urlBase, pessoaJuridica)
  }

  findAll() : Observable<PessoaJuridica[]> {
    return this.http.get<PessoaJuridica[]>(this.urlBase);
  }

  findById(id: string) : Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(this.urlBase + id);
  }

  update(pessoaJuridica: PessoaJuridica) : Observable<PessoaJuridica> {
    return this.http.put<PessoaJuridica>(this.urlBase, pessoaJuridica)
  }

  delete(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
    return this.http.delete<PessoaJuridica>(this.urlBase + pessoaJuridica.idPessoaJuridica)
  }

  findPaginator(sort: string, order: SortDirection, page: number, size: number): Observable<PessoaJuridicaApi> {
    //?sort=${sort}&order=${order}&page=${page + 1}
    let requestUrl =
      `${this.urlBase}/paginator/?page=${page}&size=${size}`;
    //&sort=${sort}&order=${order}

    requestUrl += order == 'desc' ? '&sort='+sort : '&unsort='+sort;
    return this.http.get<PessoaJuridicaApi>(requestUrl);
  }
}
