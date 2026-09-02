const LivroFisico = require("./LivroFisico");
const LivroDigital = require("./LivroDigital");
const Carrinho = require("./Carrinho");
const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");

// Instâncias de Livros
const livroFisico = new LivroFisico("Clean Code", "Robert C. Martin", 89.90, 12, 0.6);
const livroDigital = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

console.log("=== LIVRO FÍSICO ===");
livroFisico.descrever();

console.log("\n=== LIVRO DIGITAL ===");
livroDigital.descrever();

console.log("\n=== TESTANDO O CARRINHO ===");
const carrinho = new Carrinho();
carrinho.adicionarLivro(livroFisico);   // R$ 89.90
carrinho.adicionarLivro(livroDigital);  // R$ 45.00
carrinho.resumo();                       // Exibe a lista, total e frete grátis

console.log("\n=== POLIMORFISMO (Tratamento Uniforme) ===");
const acervo = [livroFisico, livroDigital];
acervo.forEach((livro) => {
  console.log(`Livro: ${livro.titulo} | Frete: R$ ${livro.calcularFrete().toFixed(2)}`);
});

console.log("\n=== CLIENTE E FUNCIONÁRIO ===");
const cliente = new Cliente("Guilherme Tomaz", "guilhermetomaz@email.com", 10);
cliente.descrever();
cliente.adicionarCompra(120.00);

console.log("");
const funcionario = new Funcionario("Guilherme Camara", "guilhermecamara@livraria.com", 3000.00, "Gerente");
funcionario.descrever();

console.log("\n=== TESTE DE VALIDAÇÃO (Regras de Negócio) ===");
livroFisico.preco = -15;      // Deve acionar o erro de preço negativo
funcionario.salario = -500;   // Deve acionar o erro de salário negativo