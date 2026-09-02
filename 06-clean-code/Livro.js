class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque) {
    this.titulo = titulo;
    this.autor = autor;
    this.preco = preco;     // Reaproveita o setter para validar o preco inicial
    this.estoque = estoque; // Reaproveita o setter para validar o estoque inicial
  }

  get preco() {
    return this.#preco;
  }

  set preco(novoPreco) {
    if (novoPreco < 0) {
      console.log("ERRO: Preço não pode ser negativo. Valor recusado.");
      return;
    }
    this.#preco = novoPreco;
  }

  get estoque() {
    return this.#estoque;
  }

  set estoque(novoEstoque) {
    if (novoEstoque < 0) {
      console.log("ERRO: Estoque não pode ser negativo. Valor recusado.");
      return;
    }
    this.#estoque = novoEstoque;
  }

  descrever() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Preco: R$ ${this.#preco.toFixed(2)}`);
    console.log(`Estoque: ${this.#estoque} unidades`);
  }

  valorEmEstoque() {
    return this.#preco * this.#estoque;
  }
}

module.exports = Livro;