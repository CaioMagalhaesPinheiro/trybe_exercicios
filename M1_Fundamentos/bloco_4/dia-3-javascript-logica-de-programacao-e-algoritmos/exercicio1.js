/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

let n = 5;
let linhaAsteristico = "";

if (n <= 1) {
  console.log("Número inválido.")
} else {
    for (let index = 0; index <= n; index += 1) {
      linhaAsteristico = "";
      for (let linha = 0; linha <= n; linha += 1) {
          linhaAsteristico += "*";
        }        
        console.log(linhaAsteristico)                   
      } 
    }
