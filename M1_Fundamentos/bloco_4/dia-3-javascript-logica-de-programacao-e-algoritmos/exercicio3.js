/* Agora inverta o lado do triângulo. */

let n = 5;
let linhaAsteristico = "";
let espaçoVazio = "";
let triangulo;

if (n <= 1) {
  console.log("Número inválido.")
} else {
  for (let index = n-1; index > 0; index -= 1) {
    espaçoVazio += "X";
  }
  for (let index2 = 1; index2 <= n; index2 += 1) {
    espaçoVazio += " ";
    console.log(espaçoVazio);
  }
  for (let index2 = 1; index2 <= n; index2 += 1) {
  linhaAsteristico += "*";
  triangulo = espaçoVazio + linhaAsteristico;
  console.log(triangulo)
  }  
}