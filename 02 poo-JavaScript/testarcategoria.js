const Categoria = require("./Categoria");

console.log("");
console.log("===== CATEGORIAS =====");
console.log("");

const cat1 = new Categoria("Tecnologia", "livros sobre programacao");
const cat2 = new Categoria("Literatura", "romances e contos");

cat1.descrever();
console.log("");
cat2.descrever();
console.log("");

console.log("----- testando o setter -----");
cat1.nome = "TI"; // invalido: menos de 3 letras
console.log("Nome agora: " + cat1.nome);

cat1.nome = "Tecnologia da Informacao"; // valido
console.log("Nome agora: " + cat1.nome);