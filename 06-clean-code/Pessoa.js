class Pessoa {
  #nome;
  #email;

  constructor(nome, email) {
    this.nome = nome;   // Utiliza o setter para validação
    this.email = email; // Utiliza o setter para validação
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    if (!novoNome || novoNome.trim() === "") {
      console.log("ERRO: Nome não pode ser vazio.");
      return;
    }
    this.#nome = novoNome;
  }

  get email() {
    return this.#email;
  }

  set email(novoEmail) {
    if (!novoEmail || !novoEmail.includes("@")) {
      console.log("ERRO: E-mail inválido.");
      return;
    }
    this.#email = novoEmail;
  }

  descrever() {
    console.log(`Nome: ${this.#nome}`);
    console.log(`E-mail: ${this.#email}`);
  }
}

module.exports = Pessoa;