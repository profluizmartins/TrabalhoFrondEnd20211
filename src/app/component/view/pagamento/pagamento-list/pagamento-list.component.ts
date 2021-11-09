//import { HotelService } from './../../../../service/hotel.service';
import { PagamentoService } from 'src/app/service/pagamento.service';
import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/model/pagamento.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.css']
})
export class PagamentoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}