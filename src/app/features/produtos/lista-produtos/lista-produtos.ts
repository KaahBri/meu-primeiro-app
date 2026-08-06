import { Component, signal, computed } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  //Writesignal -> signal (reativo) que permite alterações (com set ou update)
  produtos = signal([
    // mande um sinal (ele atualiza quando um vetor muda ou algo assim)
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
    { nome: 'Caixa de Som', preco: 199.99 },
    { nome: 'Fone De Ouvido', preco: 80 },
  ]);
  //computed 
  totalProdutos = computed(() => this.produtos().length); // observa outro sinal automaticamente

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0); // reduce -> pega so quem tá interessada
  }); // essa linha faz a soma dos produtos.  

  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }
  // update -> adiciona um item do writeblesignal
  adicionarProduto() {
    this.produtos.update((listaAtual) => [
      ...listaAtual,
      { nome: 'Teclado', preco: 250 },
      { nome: 'Monitor Curvo', preco: 4999.99 },
    ]);
  }
  // 
  substituirProdutos() {
    this.produtos.set([{ nome: 'Produto novo', preco: 0 }]);
  } 
}
