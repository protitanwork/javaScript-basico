// função de boas vindas 

function boasVindas(nome){
    return `Olá, ${nome}! bem-vindo ao seu treino diario de programação.`;
}

console.log(boasVindas("Sérgio"));


// função numero 2 

function calcularIMC(peso,altura){
    let IMC= peso / (altura* altura);
    let classificacao = "";
      if (IMC < 18.5) {
    classificacao = "abaixo do peso";
  } else if (IMC >= 18.5 && IMC < 24.9) {
    classificacao = "com peso normal";
  } else if (IMC >= 25 && IMC < 29.9) {
    classificacao = "com sobrepeso";
  } else if (IMC >= 30 && IMC < 34.9) {
    classificacao = "com obesidade grau I";
  } else if (IMC >= 35 && IMC < 39.9) {
    classificacao = "com obesidade grau II";
  } else {
    classificacao = "com obesidade grau III (mórbida)";
  }
    return `seupeso é ${peso}kg, sua altura é ${altura} m e seu IMC é ${IMC.toFixed(2)} e você está ${classificacao}.`;
}


console.log(calcularIMC(60,1.55

));