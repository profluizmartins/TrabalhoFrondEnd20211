import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Pagamento } from '../component/view/pagamento/model/pagamento';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService {
  urlBase: string = 'http://localhost:8080/pagamentos';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  findAll(): Observable<Pagamento[]> {
    return this.http.get<any[]>(this.urlBase);
  }

  findAllPaginator(
    sort: string,
    order: SortDirection,
    page: number,
    size: number,
    filter: string
  ): Observable<any> {

    const url = '';

    // console.log(url)
    return this.http.get<any>(url);
  }

  findPagamentosPendentesPaginator(
    sort: string,
    order: SortDirection,
    page: number,
    size: number,
    filter: string
  ): Observable<any> {
    // REALIZAR CHAMADAS HHTP.
    // if (filter === undefined) {
    //   filter = '';
    // }

    const url = this.urlBase + 'pendentes';

    // console.log(url)
    return this.http.get<any>(url);
  }

  create(pagamento: any): Observable<any> {
    return this.http.post(`${this.urlBase}/cadastrarPagamento/${pagamento.venda_id}`, pagamento);
  }

  getPagamentosPendentes():  Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.urlBase}/pendentes`)
  }


  getPagamentosAprovados():  Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.urlBase}/aprovados`)
  }
}
