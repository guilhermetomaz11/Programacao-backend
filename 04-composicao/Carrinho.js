class Carrinho {
  #livros;

  constructor() {
    this.#livros = []; // OK: inicializa como array vazio para guardar múltiplos livros
  }

  get totalItens() {
    return this.#livros.length;
  }

  adicionarLivro(livro) {
    // LACUNA 3 -> Acrescenta o livro no array privado
    this.#livros.push(livro); 
  }

  listar() {
    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(livro.titulo + " - R$ " + livro.preco);
    });
  }

  calcularTotal() {
    let total = 0; // OK: usa 'let' pois o valor é reatribuído a cada volta
    
    // LACUNA 4 -> Percorre o array e soma o preço dos livros
    this.#livros.forEach((livro) => {
      total = total + livro.preco;
    });
    
    return total;
  }
}

module.exports = Carrinho;