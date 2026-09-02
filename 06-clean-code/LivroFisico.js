const Livro = require("./Livro");

const PRECO_POR_KG = 2.5;

class LivroFisico extends Livro {
  #peso;

  constructor(titulo, autor, preco, estoque, peso) {
    super(titulo, autor, preco, estoque);
    this.peso = peso; // Reaproveita o setter para validar o peso inicial
  }

  get peso() {
    return this.#peso;
  }

  set peso(novoPeso) {
    if (novoPeso <= 0) {
      console.log("ERRO: O peso deve ser maior que zero. Valor recusado.");
      return;
    }
    this.#peso = novoPeso;
  }

  calcularFrete() {
    return this.#peso * PRECO_POR_KG;
  }

  descrever() {
    super.descrever();
    console.log("Tipo: Fisico");
    console.log(`Peso: ${this.#peso}kg`);
    console.log(`Frete: R$ ${this.calcularFrete().toFixed(2)}`);
  }
}

module.exports = LivroFisico;