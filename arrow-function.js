function soma (a, b) {
    return a + b;
}

const somaArrow = (a, b) => a + b;

let resultado = soma(4, 3);

console.log(soma(4, 3)); // 7



console.log("Function arrow: " + somaArrow(4, 3)); // 7

console.log(`Resultado é: ${resultado}`); // 7



//Outro jeito
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(4)); // true

//Ourei jeito

const ehParArrow = numero => numero % 2 === 0;

console.log("Arrow: " + ehParArrow(4)); // true


//Let pode ser alterado a variavel. Const não altera;
/*
const subtracaoArrow = (a, b) => a - b;
const multiplicacaoArrow = (a, b) => a * b;
const divisaoArrow = (a, b) => a / b;*/


//Tabuada multiplicação - Função tradicional
/*function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
    resultado = tabuada(6);

    console.log("Função tradicional: " + resultado); //puxa com console.log(tabuada(6))

//Tabuada multiplicação - Função Arrow function
const tabuada = numero => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
    resultado = tabuada(6);

    console.log("Função arrow: " + resultado);

//puxa com console.log(tabuada(6)) */



console.log("-----Calculadora------");

function calculador (n1, n2, operacao) {
    switch (operacao) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': 
            return n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero";
        default:
            return "Operação inválida";
    }
}
console.log(calculador(1, 3, '+')); // 15