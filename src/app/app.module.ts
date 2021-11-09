import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field'
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/template/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543
import { PublicComponent } from './component/public/public/public.component';
import { LoginComponent } from './component/public/login/login.component';
import { SingupComponent } from './component/public/singup/singup.component';
import { EntradaListComponent } from './component/view/entrada/entrada-list/entrada-list.component';
import { EstoqueListComponent } from './component/view/estoque/estoque-list/estoque-list.component';
import { VendaListComponent } from './component/view/venda/venda-list/venda-list.component';
import { ProdutoListComponent } from './component/view/produto/produto-list/produto-list.component';
<<<<<<< HEAD
import { PagamentoFormComponent } from './component/view/pagamento/pagamento-form/pagamento-form.component';
import { PagamentoUpdateComponent } from './component/view/pagamento/pagamento-update/pagamento-update.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
=======
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
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543

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
<<<<<<< HEAD
    PagamentoFormComponent,
    PagamentoUpdateComponent    
=======
    PagamentoListComponent,
    PagamentoPendenteComponent,
    CriarPagamentoComponent,
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
<<<<<<< HEAD
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
=======
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
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543
  ],
  providers: [{ provide: MatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
