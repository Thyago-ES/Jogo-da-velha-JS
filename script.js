const imageUser = document.querySelector("#user");
const imageComp = document.querySelector("#comp");
const versus = document.querySelector("#versus");
const options = ["pedra", "papel", "tesoura"];

function escolha(opcao) {
	if (opcao === "pedra") {
		imageUser.src = "./assets/pedra.png";
	} else if (opcao === "papel") {
		imageUser.src = "./assets/papel.png";
	} else if (opcao === "tesoura") {
		imageUser.src = "./assets/tesoura.png";
	}

	imageUser.style.display = "block";

	versus.style.display = "block";

	const opcaoComp = options[Math.floor(Math.random() * 3)];

	if (opcaoComp === "pedra") {
		imageComp.src = "./assets/pedra.png";
	} else if (opcaoComp === "papel") {
		imageComp.src = "./assets/papel.png";
	} else if (opcaoComp === "tesoura") {
		imageComp.src = "./assets/tesoura.png";
	}

	imageComp.style.display = "block";

	setTimeout(() => {
		winner(opcao, opcaoComp);
	}, 500);
}

function winner(userOpt, compOpt) {
	if (userOpt === compOpt) {
		alert("Empate");
	} else if (
		(userOpt === "pedra" && compOpt === "tesoura") ||
		(userOpt === "papel" && compOpt === "pedra") ||
		(userOpt === "tesoura" && compOpt === "papel")
	) {
		alert("Você ganhou!");
	} else {
		alert("Você perdeu!");
	}
}
