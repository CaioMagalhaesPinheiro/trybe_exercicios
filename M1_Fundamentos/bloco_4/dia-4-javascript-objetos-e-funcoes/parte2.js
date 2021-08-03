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


/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */

function positionMaxInArray(array) {
	
	let posicaoMaiorNumero = 0;
	let maiorNumero = array[0];

	for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
        posicaoMaiorNumero = index;
    } 
}

return(posicaoMaiorNumero);
}

console.log(positionMaxInArray([2, 3, 6, 7, 10, 1]))


/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function positionMinInArray(array) {
	
	let posicaoMenorNumero = 0;
	let menorNumero = array[0];

	for (let index = 0; index < array.length; index += 1) {
    if (array[index] < menorNumero) {
        posicaoMenorNumero = index;
    } 
}

return(posicaoMenorNumero);
}

console.log(positionMinInArray([2, 4, 6, 7, 10, 0, -3]))


/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

function maxStringInArray(array) {
	
	let maiorString = array[0];

	for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorString.length) {
        maiorString = array[index];
    }
}


return(maiorString);
}

console.log(maxStringInArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function moda(array) {

	let numeroAtual = array[0];
	let numeroVezes = 0;
	let numeroVezesMaisRepetido = 0;
	let numeroMaisRepetido = array[0];

	for (let mudancaDeNum = 0; mudancaDeNum < array.length; mudancaDeNum += 1) {
		numeroAtual = array[mudancaDeNum];
		for (let comparacao = 0; comparacao < array.length; comparacao += 1) {
			if (numeroAtual === array[comparacao]) {
				numeroVezes += 1;
				if (numeroVezes > numeroVezesMaisRepetido) {
					numeroVezesMaisRepetido = numeroVezes;
					numeroMaisRepetido = numeroAtual;
				}
			}

		}
		numeroVezes = 0;

	}
	return numeroMaisRepetido
}

console.log(moda([2, 3, 2, 5, 8, 2, 3]))



