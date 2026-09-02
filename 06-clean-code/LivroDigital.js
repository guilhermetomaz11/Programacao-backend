const Livro = require("./Livro");

const FRETE_DIGITAL = 0;

class LivroDigital extends Livro {
  #tamanhoArquivo;

  constructor(titulo, autor, preco, estoque, tamanhoArquivo) {
    super(titulo, autor, preco, estoque);
    this.tamanhoArquivo = tamanhoArquivo; // Reaproveita o setter para validar o tamanho inicial
  }

  get tamanhoArquivo() {
    return this.#tamanhoArquivo;
  }

  set tamanhoArquivo(novoTamanho) {
    if (novoTamanho <= 0) {
      console.log("ERRO: O tamanho do arquivo deve ser maior que zero. Valor recusado.");
      return;
    }
    this.#tamanhoArquivo = novoTamanho;
  }

  calcularFrete() {
    return FRETE_DIGITAL;
  }

  descrever() {
    super.descrever();
    console.log("Tipo: Digital");
    console.log(`Tamanho do arquivo: ${this.#tamanhoArquivo}MB`);
  }
}

module.exports = LivroDigital;