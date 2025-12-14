

function categoriaBoxe(peso) {
    if (peso < 61) {
        return `Peso: ${peso} kg. Categoria: Super Pena.`;
    } else if (peso >= 61 && peso <= 66.6) {
        return `Peso: ${peso} kg. Categoria: Leve / Welter Leve.`;
    } else if (peso > 66.6 && peso <= 72) {
        return `Peso: ${peso} kg. Categoria: Meio Médio / Médio Leve.`;
    } else {
        return `Peso: ${peso} kg. Categoria: Médio ou acima.`;
    }
}

function avaliarSoco(potencia) {
    if (potencia < 300) {
        return `Potência: ${potencia}. Resultado: soco fraco, precisa treinar.`;
    } else if (potencia >= 300 && potencia <= 700) {
        return `Potência: ${potencia}. Resultado: soco médio, bom trabalho.`;
    } else {
        return `Potência: ${potencia}. Resultado: soco forte! Nível profissional!`;
    }
}







function avaliarAtleta(nome, potencia, peso){
    let analiseSoco = avaliarSoco(potencia); 
    let analisePeso = categoriaBoxe(peso);

    return `
    Atleta: ${nome}
    ${analiseSoco}
    ${analisePeso}
    avaliação concluida. Continue treinando!`

}

console.log(avaliarAtleta("sérgio carvalho",750, 73));
