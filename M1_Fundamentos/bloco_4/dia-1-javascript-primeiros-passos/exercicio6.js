let peçaXadrez = "CaVaLo".toLowerCase();
console.log(peçaXadrez);

switch (peçaXadrez) {
  case "peao":
    console.log("Avança uma casa");
    break;
    
  case "cavalo":
    console.log("Movimenta em L");
    break;
        
	case "bispo":
		console.log("Diagonais");
		break;
			
	case "torre":
		console.log("Linhas e colunas");
		break;
			
	case "dama":
    console.log("Todas as direções");
    break;
    
  case "rei":
    console.log("Apenas uma casa em todas as direções");
    break;

	default:
		console.log("Peça inexistente");
}