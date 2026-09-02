const Pessoa = require("./Pessoa");

const VALOR_POR_PONTO = 50; // Constante isolada: R$ 50 em compras geram 1 ponto

class Cliente extends Pessoa {
  #pontosFidelidade;

  constructor(nome, email, pontosFidelidade = 0) {
    super(nome, email);
    this.pontosFidelidade = pontosFidelidade;
  }

  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }

  set pontosFidelidade(novosPontos) {
    if (novosPontos < 0) {
      console.log("ERRO: Pontos de fidelidade não podem ser negativos.");
      return;
    }
    this.#pontosFidelidade = novosPontos;
  }

  adicionarCompra(valorCompra) {
    if (valorCompra <= 0) {
      console.log("ERRO: Valor da compra deve ser maior que zero.");
      return;
    }
    const pontosGanhos = Math.floor(valorCompra / VALOR_POR_PONTO);
    this.#pontosFidelidade += pontosGanhos;
    console.log(`Compra de R$ ${valorCompra.toFixed(2)} registrada (+${pontosGanhos} pontos).`);
  }

  descrever() {
    super.descrever();
    console.log(`Pontos de Fidelidade: ${this.#pontosFidelidade}`);
  }
}

module.exports = Cliente;