class Categoria {
  #nome;
  #descricao;

  constructor(nome, descricao) {
    this.#nome = nome;
    this.#descricao = descricao; // LACUNA 1
  }

  // ----- LEITURA (getters) -----
  get nome() {
    return this.#nome;
  }

  get descricao() {
    return this.#descricao; // LACUNA 2
  }

  // ----- ESCRITA COM VALIDAÇÃO (setter) -----
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
      return;
    }
    this.#nome = novoNome; // LACUNA 3
  }

  // ----- MÉTODO -----
  descrever() {
    console.log("Categoria: " + this.#nome);
    console.log("Descricao: " + this.#descricao); // LACUNA 4
  }
}

module.exports = Categoria;