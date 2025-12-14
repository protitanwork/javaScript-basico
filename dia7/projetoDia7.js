let atletas = [
  {nome: "sergio", potencia: 750},
  {nome: "paulo", potencia: 500},
  {nome: "luiz", potencia: 300}
];

// 1 lista só com nomes 
let nomes = atletas.map(a => a.nome);
console.log("nomes dos atletas:", nomes );

// 2 atletas fortes 
let atletasFortes = atletas.filter(a => a.potencia > 700);
console.log("atletas fortes:", atletasFortes);

// 3 soma total de potencias 

let totalPotencia = atletas.reduce((soma,a) => soma + a.potencia, 0);
console.log("Potencia total:", totalPotencia)
