let salarioBruto = 3000;
let inss;
let ir;
let salarioBase;
let salarioLiquido = salarioBase - ir;

if (salarioBruto <= 1556.94) {
    inss = 0.08 * salarioBruto
} else if (salarioBruto > 1556.94 & salarioBruto <= 2594.92) {
    inss = 0.09 * salarioBruto
} else if (salarioBruto > 2594.92 & salarioBruto <= 5189.82) {
    inss = 0.11 * salarioBruto
} else {
    inss = 570.88
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    ir = 0
} else if (salarioBase > 1903.98 & salarioBase <= 2826.65) {
    ir = 0.075 * salarioBase - 142.80
} else if (salarioBase > 2826.65 & salarioBase <= 3751.05) {
    ir = 0.15 * salarioBase - 354.80
} else if (salarioBase > 3751.05 & salarioBase <= 4664.68) {
    ir = 0.225 * salarioBase - 636.13
} else {
    ir = 0.275 * salarioBase - 869.36
}

salarioLiquido = salarioBase - ir;

console.log("Salário Bruto =",salarioBruto)
console.log("INSS =",inss)
console.log("Salário Base =",salarioBase)
console.log("IR =",ir)
console.log("Salário Liquido =",salarioLiquido)
