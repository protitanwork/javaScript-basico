// Obvjetivo do dia 
//consolidar arrow functions 
//escrever codigo mais limpo 

//forma tradicional 
//function somar (a, b){
  //  return a + b; 
//}

//forma moderna

//const somar = (a,b)=> a+b;


//const avaliarPotencia = (potencia) => {
//    if (potencia > 700) {
 //       return "Potencia alta ";
   // } 
 //   return " Em desenvolvimento;"

   // };

    //console.log(avaliarPotencia(800))

    const atletas = [
  { nome: "sergio", peso: 70, potencia: 750 },
  { nome: "paulo", peso: 75, potencia: 500 },
  { nome: "luiz", peso: 65, potencia: 300 }
];

const buscarAtleta = (lista, nome) => lista.find (a => a.nome === nome) || `Atleta ${nome} não encontrado`;

// find busca o primeiro que bate com a condição 

const atualizarPeso = (lista, nome, novoPeso)=> {
    const atleta = lista.find(a => a.nome === nome);
    if (!atleta) return `atleta ${nome} não encontrado`;

    atleta.peso = novoPeso;
    return `Peso de ${nome} atualizado para ${novoPeso}`
};



const relatorioAtleta = (lista, nome) => {
  const atleta = lista.find(a => a.nome === nome);
  if (!atleta) return `Atleta ${nome} não encontrado`;

  return `
Relatório do Atleta
Nome: ${atleta.nome}
Peso: ${atleta.peso} kg
Potência: ${atleta.potencia}
Situação: ${atleta.potencia > 700 ? "Nível profissional" : "Em evolução"}
`;
};



console.log(buscarAtleta(atletas,"sergio"));
console.log(atualizarPeso(atletas, "sergio", 71));
console.log(relatorioAtleta(atletas, "sergio"));
