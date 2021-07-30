/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo 
com 5 asteriscos de base. */

let n = 5;
let linhaAsteristico = "";

if (n <= 1) {
  console.log("Número inválido.")
} else {
  for (let index = 1; index <= n; index += 1) {
    linhaAsteristico += "*";
    console.log(linhaAsteristico)
  }
}