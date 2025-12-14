let atletas = [
  {nome: "sergio", potencia: 750},
  {nome: "paulo", potencia: 500},
  {nome: "luiz", potencia: 300}
];



let somaPontencias = atletas.reduce(function(total, atleta){
    return total + atleta.potencia;
}, 0);


console.log(somaPontencias);