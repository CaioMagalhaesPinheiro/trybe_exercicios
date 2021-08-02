/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada 
um dos elementos por 2 */

let array = [];
let arrayDividido = []

for (let index = 1; index < 26; index += 1) {
    array.push(index)
}

for (let contador = 0; contador < array.length; contador += 1) {
    let novoElemento = array[contador] / 2;
    arrayDividido.push(novoElemento)
}

console.log(arrayDividido)
