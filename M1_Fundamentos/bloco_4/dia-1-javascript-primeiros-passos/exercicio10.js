let custo = 100;
let venda = 200;
let imposto = 0.2 * custo;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
    console.log("Valores de entrada inválidos")
} else {
    console.log(lucro)
}