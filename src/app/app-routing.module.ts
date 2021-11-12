import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/template/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/template/home/home.component';
import { EntradaListComponent } from './component/view/entrada/entrada-list/entrada-list.component';
import { EstoqueListComponent } from './component/view/estoque/estoque-list/estoque-list.component';
import { VendaListComponent } from './component/view/venda/venda-list/venda-list.component';
import { PessoaListComponent } from './component/view/pessoa/pessoa-list/pessoa-list.component';
import { PagamentoListComponent } from './component/view/pagamento/pagamento-list/pagamento-list.component';
import { UsuarioListComponent } from './component/view/usuario/usuario-list/usuario-list.component';
import { ProdutoListComponent } from './component/view/produto/produto-list/produto-list.component';
import {PessoaFormComponent} from "./component/view/pessoa/pessoa-form/pessoa-form.component";
import {PessoaUpdateComponent} from "./component/view/pessoa/pessoa-update/pessoa-update.component";
import {PessoaJuridicaListComponent} from "./component/view/pessoaJuridica/pessoa-juridica-list/pessoa-juridica-list.component";
import {PessoaJuridicaFormComponent} from "./component/view/pessoaJuridica/pessoa-juridica-form/pessoa-juridica-form.component";
import {PessoaJuridicaUpdateComponent} from "./component/view/pessoaJuridica/pessoa-juridica-update/pessoa-juridica-update.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: HomeComponent},
      { path: "entrada", component: EntradaListComponent},
      { path: "estoque", component: EstoqueListComponent},
      { path: "venda", component: VendaListComponent},
      { path: "pessoa", component: PessoaListComponent},
      { path: "pessoa/form", component: PessoaFormComponent},
      { path: "pessoa/:id", component: PessoaUpdateComponent},
      { path: "pessoaJuridica", component: PessoaJuridicaListComponent},
      { path: "pessoaJuridica/form", component: PessoaJuridicaFormComponent},
      { path: "pessoaJuridica/:id", component: PessoaJuridicaUpdateComponent},
      { path: "pagamento", component: PagamentoListComponent},
      { path: "usuario", component: UsuarioListComponent},
      { path: "produto", component: ProdutoListComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
