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
<<<<<<< HEAD
import { PagamentoFormComponent } from './component/view/pagamento/pagamento-form/pagamento-form.component';
import { PagamentoUpdateComponent } from './component/view/pagamento/pagamento-update/pagamento-update.component';
=======
import { PagamentoPendenteComponent } from './component/view/pagamento/pagamento-pendente/pagamento-pendente.component';
import { CriarPagamentoComponent } from './component/view/pagamento/criar-pagamento/criar-pagamento.component';
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
<<<<<<< HEAD
      { path: "", component: HomeComponent},
      { path: "entrada", component: EntradaListComponent},
      { path: "estoque", component: EstoqueListComponent},
      { path: "venda", component: VendaListComponent},
      { path: "pessoa", component: PessoaListComponent},
      { path: "pagamento", component: PagamentoListComponent},
      { path: 'pagamento/form', component: PagamentoFormComponent },
      { path: "usuario", component: UsuarioListComponent},
      { path: "produto", component: ProdutoListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
=======
      { path: '', component: HomeComponent },
      { path: 'entrada', component: EntradaListComponent },
      { path: 'estoque', component: EstoqueListComponent },
      { path: 'venda', component: VendaListComponent },
      { path: 'pessoa', component: PessoaListComponent },
      { path: 'pagamento', component: PagamentoListComponent },
      { path: 'pagamento-pendente', component: PagamentoPendenteComponent },
      { path: 'cadastrar-pagamento', component: CriarPagamentoComponent },
      { path: 'usuario', component: UsuarioListComponent },
      { path: 'produto', component: ProdutoListComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
>>>>>>> 9957ba9f1f8a13ad5cf29f1c4b4bc16b8d6b4543
  exports: [RouterModule],
})
export class AppRoutingModule {}
