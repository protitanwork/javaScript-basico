let dias = [
    { dia: 1, horas: 9 },
    { dia: 2, horas: 9 },
    { dia: 3, horas: 9 },
    { dia: 4, horas: 9 },
    { dia: 5, horas: 9 },
    { dia: 6, horas: 8 },
    { dia: 10, horas: 9 },
    { dia: 11, horas: 9 },
    { dia: 12, horas: 8}
];

function diaMaisTrabalhado(lista) {
    let maior = lista[0];

    for (let i = 1; i < lista.length; i++){
        if (lista[i].horas> maior.horas){
            maior = lista[i]; 
        }
    }

    return `o dia com mais horas trabalhadas foi o dia ${maior.dia} com ${maior.horas} horas.`;
}


console.log( diaMaisTrabalhado(dias))
