const Pessoa = require("./Pessoa");

const PERCENTUAL_BONUS = 0.10; // Constante isolada: 10% de bônus

class Funcionario extends Pessoa {
  #salario;
  #cargo;

  constructor(nome, email, salario, cargo) {
    super(nome, email);
    this.salario = salario;
    this.cargo = cargo;
  }

  get salario() {
    return this.#salario;
  }

  set salario(novoSalario) {
    if (novoSalario < 0) {
      console.log("ERRO: Salário não pode ser negativo.");
      return;
    }
    this.#salario = novoSalario;
  }

  get cargo() {
    return this.#cargo;
  }

  set cargo(novoCargo) {
    if (!novoCargo || novoCargo.trim() === "") {
      console.log("ERRO: Cargo não pode ser vazio.");
      return;
    }
    this.#cargo = novoCargo;
  }

  calcularBonus() {
    return this.#salario * PERCENTUAL_BONUS;
  }

  descrever() {
    super.descrever();
    console.log(`Cargo: ${this.#cargo}`);
    console.log(`Salário: R$ ${this.#salario.toFixed(2)}`);
    console.log(`Bônus Anual: R$ ${this.calcularBonus().toFixed(2)}`);
  }
}

module.exports = Funcionario;