
  import { Routes } from '@angular/router';
  import { Home } from './features/home/home/home';
  import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
  import { Carrinho } from './features/carrinho/carrinho/carrinho';


  // São as rotas bb
  export const routes: Routes = [
    { path: '', component: Home }, // Cai em Home
    { path: 'produtos', component: ListaProdutos }, // Cai em produtos
    { path: 'carrinho', component: Carrinho }, // Cai em Carrinhos
  ];