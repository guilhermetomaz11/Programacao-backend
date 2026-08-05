const Livro = require("./Livro");


const livro1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12);
const livro2 = new Livro("O Pequeno Príncipe", "Saint-Exupéry", 34.9, 5);


console.log("--- Títulos ---");
console.log(livro1.titulo);
console.log(livro2.titulo);

console.log("\n--- Descrição do Livro 1 ---");
livro1.descrever();

console.log("\n--- Valor total em estoque ---");
const valor = livro1.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor.toFixed(2));

console.log("\n--- Testando o Encapsulamento / Setter ---");
livro1.preco = 99.9;
console.log("Novo preço aceito: R$ " + livro1.preco);

livro1.preco = -50;
console.log("Preço após tentativa inválida: R$ " + livro1.preco);