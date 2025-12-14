let atletas = [
  {nome: "sergio", potencia: 750},
  {nome: "paulo", potencia: 500},
  {nome: "luiz", potencia: 300}
];


let potenciaAumentada = atletas.map(function(atleta){
    return {
        nome: atleta.nome,
        potencia: atleta.potencia * 1.10

    }
});

 console.log(potenciaAumentada);


 // map sempre retorna um novo array 