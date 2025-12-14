


function calcularCorda (minutos){ 
    let caloriasPorMinuto = 12; 
    let total =  minutos * caloriasPorMinuto;

    return `você pulou ${minutos} minutos de corda e seu gasto foi de ${total} calorias.`;
}

console.log(calcularCorda(20));