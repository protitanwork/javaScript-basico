let atletas = [
    {nome:"sergio", peso: 69, potencia: 750},
    {nome:"paulo", peso: 75, potencia: 750}

];

function buscarAtleta(lista, nome){
    for (let i= 0; i< lista.length; i++){
        if (lista[i].nome === nome){
            return lista[i];
        }
    }
    return `atleta ${nome} não encontrado`;
}

console.log(buscarAtleta(atletas, "sergio"));

function atualizarPeso (lista, nome, novoPeso){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].nome === nome){
            lista[i].peso = novoPeso; 
            return `peso de ${nome} atualizado para ${novoPeso} kg.`
        }
    }
    return "atleta não encontrado"

}

console.log(atualizarPeso(atletas, "sergio", 70))


function relatorioAtleta(lista, nome){
    let atleta = buscarAtleta (lista, nome);

    if (typeof atleta === "string"){
        return atleta; 
    }
    return `
    relatório do atleta 
    nome: ${atleta.nome}
    peso: ${atleta.peso} kg
    potência ${atleta.potencia}
    situação: ${atleta.potencia > 700 ? "Potência alta (nivel profissional)" : "em desenvolvimento"}`;
}

console.log(relatorioAtleta(atletas,"sergio"));
