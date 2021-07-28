let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;
let somaAngulos = angulo1 + angulo2 + angulo3;

if (somaAngulos === 180) {
    console.log(true)
} else  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("erro: angulos devem ser números positivos.")
} else {
    console.log(false)
}
