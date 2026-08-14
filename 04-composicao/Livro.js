class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
    
    // LACUNA 1 -> Composição: guarda a categoria no atributo público (sem #)
    this.categoria = categoria; // OK: nome explicativo para o objeto associado
  }

  // ----- LEITURA (getters) -----
  get preco() {
    return this.#preco;
  }

  get estoque() {
    return this.#estoque;
  }

  // ----- ESCRITA COM VALIDAÇÃO (setter) -----
  set preco(novoPreco) {
    if (novoPreco < 0) {
      console.log("ERRO: preco nao pode ser negativo. Valor recusado.");
      return;
    }
    this.#preco = novoPreco;
  }

  // ----- MÉTODOS -----
  descrever() {
    console.log("Titulo: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Preco: R$ " + this.#preco);
    
    // LACUNA 2 -> Imprime o nome da categoria atravessando os objetos
    console.log("Categoria: " + this.categoria.nome); 
  }

  valorEmEstoque() {
    return this.#preco * this.#estoque;
  }

  vender(quantidade) {
    if (quantidade > this.#estoque) {
      console.log("ERRO: estoque insuficiente.");
      return;
    }
    this.#estoque = this.#estoque - quantidade;
    console.log("Venda registrada. Restam " + this.#estoque + " unidades.");
  }
}

module.exports = Livro;