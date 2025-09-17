let numeros = [10, 20, 30];

// Adicione 40 no final
numeros.push(40);  //O push add no final do array
//numeros[2] = 40;  //Outra forma de add no final do array

// Adicione 5 no início
numeros.unshift(5); //Unshift serve para adicionar no ínicio

console.log("Array com adições:", numeros);

// Remova o último elemento
let ultimo = numeros.pop(); //Pop remove o último elemento do array

// Remova o primeiro elemento
let primeiro = numeros.shift(); //Shift remove o primeiro elemento do array

console.log("Removido do final:", ultimo);
console.log("Removido do início:", primeiro);
console.log("Array final:", numeros);