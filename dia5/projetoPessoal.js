let diasTrabalhadosLista = [
    {dia: 1, horas: 9 },
    {dia: 2, horas: 9 },
    {dia: 3, horas: 9 },
    {dia: 4, horas: 9 },
    {dia: 5, horas: 9 },
    {dia: 6, horas: 8 },
    {dia: 10, horas: 9 },
    {dia: 11, horas: 9 },
]

function resumoDiasTrabalhados (arr){
     let totalDias = arr.length;
    let totalHoras =0;
    let texto = "resumo dos dias trabalhados : \n";


for (let  i= 0; i < arr.length; i++){
    let trabalho = arr[i];
    texto += `- ${trabalho.dia}: ${trabalho.horas}\n`;
    totalHoras += trabalho.horas; 

    

    }
      
    texto += `Total  ${totalDias} dias trabalhados e  ${totalHoras} horas.`;
     return texto;

}

console.log(resumoDiasTrabalhados(diasTrabalhadosLista))

