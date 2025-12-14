
let atletas = [
  {nome: "sergio", potencia: 750},
  {nome: "paulo", potencia: 500},
  {nome: "luiz", potencia: 300}
];






let fortes = atletas.filter(function(atletas){
    return atletas.potencia > 700;
});

console.log(fortes);
