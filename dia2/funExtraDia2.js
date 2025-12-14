let treinosSemana = []; 

function registrarTreino(dia,minutos) {
    let caloriasPorMinuto = 12; 
    let calorias = minutos * caloriasPorMinuto; 

    let treino = { 
        dia: dia, 
        minutos: minutos,
        calorias: calorias
    }; 

    treinosSemana.push(treino); 

    return `no dia ${dia} você treinou ${minutos} e queimou aproximadamente ${calorias} calorias.`; 


}


function resumoSemana(){
    let totalMinutos = 0;
    let totalCalorias = 0; 

    for ( let i = 0; i < treinosSemana.length; i++){
        totalMinutos += treinosSemana[i].minutos;
        totalCalorias += treinosSemana[i].calorias;
    }

    return `nessa semana você fez ${treinosSemana.lastIndexOf} treinos, somando ${totalMinutos} calorias queimadas.`;
}

console.log(registrarTreino("Segunda", 20));
console.log(registrarTreino("Quarta", 30));
console.log(registrarTreino("Sexta", 15));

console.log("----------");
console.log(resumoSemana());
console.log("Lista detalhada de treinos:", treinosSemana);