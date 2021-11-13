import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/template/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PublicComponent } from './component/public/public/public.component';
import { LoginComponent } from './component/public/login/login.component';
import { SingupComponent } from './component/public/singup/singup.component';
import { EntradaListComponent } from './component/view/entrada/entrada-list/entrada-list.component';
import { EstoqueListComponent } from './component/view/estoque/estoque-list/estoque-list.component';
import { VendaListComponent } from './component/view/venda/venda-list/venda-list.component';
import { ProdutoListComponent } from './component/view/produto/produto-list/produto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { PagamentoListComponent } from './component/view/pagamento/pagamento-list/pagamento-list.component';
import { PagamentoPendenteComponent } from './component/view/pagamento/pagamento-pendente/pagamento-pendente.component';
import { CriarPagamentoComponent } from './component/view/pagamento/criar-pagamento/criar-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    PublicComponent,
    LoginComponent,
    SingupComponent,
    EntradaListComponent,
    EstoqueListComponent,
    VendaListComponent,
    ProdutoListComponent,
    PagamentoListComponent,
    PagamentoPendenteComponent,
    CriarPagamentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
  ],
  providers: [{ provide: MatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
