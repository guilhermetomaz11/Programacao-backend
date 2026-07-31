const estante = require("./estante");

console.log("===================================");
console.log("        MINHA ESTANTE");
console.log("===================================");
console.log("");

// ===== LIVRO 1 =====
console.log("Titulo:  " + estante.livro1.titulo);
console.log("Autor:   " + estante.livro1.autor);
console.log("Preco:   R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");

// ITEM A: Linha separadora
console.log("-----------------------------------");

// ===== LIVRO 2 =====
console.log("Titulo:  " + estante.livro2.titulo);
console.log("Autor:   " + estante.livro2.autor);
console.log("Preco:   R$ " + estante.livro2.preco);
console.log("Estoque: " + estante.livro2.estoque + " unidades");

// ITEM B: Terceiro livro
console.log("-----------------------------------");
console.log("Titulo:  " + estante.livro3.titulo);
console.log("Autor:   " + estante.livro3.autor);
console.log("Preco:   R$ " + estante.livro3.preco);
console.log("Estoque: " + estante.livro3.estoque + " unidades");

console.log("");

// ITEM C: Total de unidades na estante (incluindo os 3 livros)
console.log(
  "Total de unidades: " + (estante.livro1.estoque + estante.livro2.estoque + estante.livro3.estoque)
);

// ITEM D: Quanto vale o livro 1 no estoque
console.log(
  "Valor em estoque do livro 1: R$ " + 
  (estante.livro1.preco * estante.livro1.estoque).toFixed(2)
);

// ITEM E: Quanto vale o livro 2 no estoque
console.log(
  "Valor em estoque do livro 2: R$ " + 
  (estante.livro2.preco * estante.livro2.estoque).toFixed(2)
);

// ITEM F: Quanto vale o livro 3 no estoque
console.log(
  "Valor em estoque do livro 3: R$ " + 
  (estante.livro3.preco * estante.livro3.estoque).toFixed(2)
);

console.log("");
console.log("===================================");