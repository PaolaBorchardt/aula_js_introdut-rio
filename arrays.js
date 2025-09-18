// Arrays

/*
    vetores Portugol

    inteiro numero[5] = {10, 20, 30, 40, 50}
    para (inteiro i = 0; i < 5; i++) {
        escreva("Posição ", i, ": ", numero[i])
        escreva("\n")
    }
*/

let numeros = [10, 20, 30, 40, 50, 15];

let nome = "Paola";

console.log(nome.length);

  //lenght conta a quantidade de caracteres

console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}: ${numeros[i]}`);
}



//Teste com ftutas 
{
// Crie um array
    let frutas = ["maçã", "laranja", "banana"];

    for (let fruta of frutas) {
        console.log(fruta);
    }

    frutas.forEach(fruta => {
        console.log("Fruta: ", fruta)
    });

}

{

        let numeros_2 = [5, 3, 8, 1, 4];
        numeros_2.push(10)
        console.log(numeros_2);
 
}


{
    let numeros_3 = [5, 3, 8, 1, 4];
    numeros_3.pop();
    console.log(numeros_3);
}
/*let numeros = [10, 20, 30];

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
console.log("Array final:", numeros);*/



console.log("--------------------");

{
    let nomes = ["Ana", "Bruno", "Carlos", "Diana"];

    nomes.unshift("Paola"); //adiciona no inicio
    console.log(nomes); 
}

{
    let carros = ["Gol", "Uno", "Palio", "Celta"];
    carros.shift(); //remove do inicio
    console.log(carros);

    console.log(carros.indexOf("Palio")); //mostra a posição do elemento
}

{

    let numeros_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosPares = numeros_4.filter(numero => numero % 2 === 0); //filter = filtra

    console.log(numerosPares); 

    let quadrados = numeros_4.map(numero => numero * numero); //map = mapeia //transforma a informação do array
    
    console.log(quadrados);

}

{

    let cores = ["vermelho", "azul", "verde", "amarelo"];
    console.log(cores.includes("verde")); //includes = verifica se o elemento existe no array
    console.log(cores.includes("roxo")); //false

}

{

    let frutas = ["maçã", "banana", "laranja"]; //slice sempre ignora o primeiro e serve para trazer o intervalo entre uma palavra ou elemento e outro

    console.log(frutas.slice(0, 2)); 

    let palavras = "JavaScript";
    console.log(palavras.slice(0, 4)); //Imprime os 4 primeiros carcteres
    
}

{
    let nome = "Paola Borchardt";
    console.log(nome.toLocaleLowerCase()); //fonte em letra minúscula
    console.log(nome.toLocaleUpperCase()); //fonte em letra maiúscula

}