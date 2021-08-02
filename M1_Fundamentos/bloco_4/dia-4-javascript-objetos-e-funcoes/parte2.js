/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , 
se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function reverseString(string) {
    let arrayString = string.split('');
    let reversed = arrayString.reverse();
    reversedString = reversed.join('')    
    if (string === reversedString) {
        return true
    } else {
        return false
    }
}

console.log(reverseString('arara'))