const Categoria = require("./Categoria");
const Livro = require("./Livro");
const Carrinho = require("./Carrinho");

// Teste Parte 1
const catTec = new Categoria("Tecnologia", "livros sobre programacao");
const l1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12, catTec);

l1.descrever();
console.log("Descricao da categoria: " + l1.categoria.descricao);

// Teste Parte 2
const l2 = new Livro(
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  45.0,
  999,
  catTec
);

const carrinho = new Carrinho();
carrinho.adicionarLivro(l1);
carrinho.adicionarLivro(l2);

carrinho.listar();
console.log("Total: R$ " + carrinho.calcularTotal().toFixed(2));