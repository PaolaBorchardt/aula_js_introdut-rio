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
