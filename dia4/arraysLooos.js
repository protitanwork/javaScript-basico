// essa é estrutura do for para percorrer um array com loop 


//for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);



// primeiro vamos construir nossso array
// isso aqui \n é uma quebra de linha 

let treinos = ["segunda", "quarta", "sexta"];

// logo apos a função que vai listar os dias de treino 

function listarTreinos(lista){
     let texto = "Dias de treino:\n";

     for (let i = 0; i < lista.length; i++){
        texto += `- ${lista[i]}\n`;
     }

     return texto;
}

console.log(listarTreinos(treinos));

let calorias = [300, 450, 180]

function somarCalorias(arr){
    let total = 0; 

    for ( let i = 0; i < arr.length; i++){

        total += arr[i];
    } 

    return`total de calorias queimadas na semana: ${total}`;
}

console.log(somarCalorias(calorias));



let treinosSemana = [
    {dia: "segunda", minutos:20, calorias: 240},
     {dia: "quarta", minutos:30, calorias: 360},
     {dia: "sexta", minutos:15, calorias: 180}
 ];

 function resumoTreinos ( lista){
    let totalMinutos = 0;
    let totalCalorias =0;
    let texto = "resumo dos treinos da semana \n";

    for (let i =0; i < lista.length; i++){
        let treino = lista[i];
        texto += `- ${treino.dia}: ${treino.minutos} min, ${treino.calorias} cal\n`;
        totalMinutos += treino.minutos;
        totalCalorias += treino.calorias; 
    }

   texto += `Total da semana: ${totalMinutos} minutos e ${totalCalorias} calorias queimadas.`;

    return texto;
 }

 console.log(resumoTreinos(treinosSemana))
