const VALOR_MINIMO_FRETE_GRATIS = 100;

class Carrinho {
  #livros;

  constructor() {
    this.#livros = [];
  }

  adicionarLivro(livro) {
    this.#livros.push(livro);
  }

  listar() {
    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(`${livro.titulo} - R$ ${livro.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    let total = 0;
    this.#livros.forEach((livro) => {
      total += livro.preco;
    });
    return total;
  }

  mostrarStatusFrete(total) {
    if (total > VALOR_MINIMO_FRETE_GRATIS) {
      console.log("Você ganhou frete grátis!");
    } else {
      const faltam = VALOR_MINIMO_FRETE_GRATIS - total;
      console.log(`Faltam R$ ${faltam.toFixed(2)} para frete grátis.`);
    }
  }

  resumo() {
    this.listar();
    const total = this.calcularTotal();
    console.log(`Total: R$ ${total.toFixed(2)}`);
    this.mostrarStatusFrete(total);
  }
}

module.exports = Carrinho;