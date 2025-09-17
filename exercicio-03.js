let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += i; // soma = soma + i
}

console.log(`A soma dos números de 1 a 10 é: ${soma}`);

// Complete a função que verifica se um número é par ou ímpar

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Teste a função
console.log(verificarParImpar(7));  // deve retornar "par"
console.log(verificarParImpar(6));  // deve retornar "ímpar"