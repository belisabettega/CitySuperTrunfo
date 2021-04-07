let cartaFloripa = {
	nome: "Florianópolis",
	atributos: {
		segurança: 75,
		beleza: 85,
		natureza: 95,
		serviços: 70
	}
}

let cartaSp = {
	nome: "São Paulo",
	atributos: {
		segurança: 50,
		beleza: 55,
		natureza: 50,
		serviços: 90
	}
}

let cartaLondres = {
	nome: "Londres",
	atributos: {
		segurança: 80,
		beleza: 90,
		natureza: 70,
		serviços: 90
	}
}

let cartas = [cartaFloripa, cartaSp, cartaLondres];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
	let indiceCartaMaquina = parseInt(Math.random() * 3);
	cartaMaquina = cartas[indiceCartaMaquina];

	let indiceCartaJogador = parseInt(Math.random() * 3);
	while (indiceCartaJogador === indiceCartaMaquina) {
		indiceCartaJogador = parseInt(Math.random() * 3);
	}
	cartaJogador = cartas[indiceCartaJogador];

	document.getElementById('btnSortear').disabled = true;
	document.getElementById('btnJogar').disabled = false;

	exibirOpcoes();
}

function exibirOpcoes() {
	let opcoes = document.getElementById('opcoes');
	let opcoesTexto = "";
	for (let atributo in cartaJogador.atributos) {
		opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
	}
	opcoes.innerHTML = opcoesTexto;
}

function obterAtributo () {
	let radioAtributo = document.getElementsByName('atributo');
	for (let i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value;
		}
	}
}

function jogar() {
	let atributoSelecionado = obterAtributo();

	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		alert("Venceu a máquina!");
	} else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		alert("Perdeu da máquina ):");
	} else {
		alert("Empatou!");
	}
	console.log(cartaMaquina);
}