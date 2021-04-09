let cartaFloripa = {
	nome: "Florianópolis",
	imagem: "https://en.unesco.org/creative-cities/sites/default/files/Florianopolis2_View-of-Beiramar-Avenue_%28c%29SANTUR-Santa-Catarina-Turismo-SA.jpg",
	atributos: {
		segurança: 75,
		beleza: 85,
		natureza: 95,
		serviços: 70
	}
}

let cartaSp = {
	nome: "São Paulo",
	imagem: "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/brazil/office-pages/sao-paulo-mobile.jpg?rev=686a6a5a604e4a7f9edaa027320f58fe",
	atributos: {
		segurança: 50,
		beleza: 55,
		natureza: 50,
		serviços: 90
	}
}

let cartaLondres = {
	nome: "London",
	imagem: "https://www.visitbritain.com/sites/default/files/styles/consumer_hero_image_mobile/public/consumer_components_enhanced/header_image/untitled_website_header_2.jpg?itok=LLM9eAV6",
	atributos: {
		segurança: 80,
		beleza: 90,
		natureza: 70,
		serviços: 90
	}
}

let cartaToronto = {
	nome: "Toronto",
	imagem: "data:image/jpeg;base64,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",
	atributos: {
		segurança: 85,
		beleza: 90,
		natureza: 70,
		serviços: 85
	}
}

let cartaSantos = {
	nome: "Santos",
	imagem: "https://cf.bstatic.com/images/hotel/max1024x768/240/240388263.jpg",
	atributos: {
		segurança: 65,
		beleza: 80,
		natureza: 80,
		serviços: 50
	}
}

let cartaNovaIorque = {
	nome: "New York",
	imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2018/03/istock-627041138.jpg?quality=70&strip=info&w=1024",
	atributos: {
		segurança: 85,
		beleza: 75,
		natureza: 70,
		serviços: 95
	}
}

let playerCard;
let computerCard;
let carts = [cartaFloripa, cartaSp, cartaLondres, cartaToronto, cartaSantos, cartaNovaIorque];

let playerPoints = 0;
let computerPoints = 0;

hideCards();
actualNumCards();
actualScore();

document.getElementById('btnSortear').disabled = false;
document.getElementById('selec-att').disabled = true;
document.getElementById('btnNextGame').disabled = true;


function actualNumCards() {
	let divNumCards = document.getElementById('num-cards');
	let html = "Cartas no jogo: " + carts.length;
	divNumCards.innerHTML = html;
}

function actualScore() {
	let divScore = document.getElementById('score');
	let html = "Player " + playerPoints + " / Computer " + computerPoints;

	divScore.innerHTML = html;
	document.getElementById('btnNextGame').disabled = false;
}

function sortearCarta() {
	let divPlayerCard = document.getElementById('div-player-card');
	divPlayerCard.style.display = "block";
	let numCompCard = parseInt(Math.random() * carts.length);
	computerCard = carts[numCompCard];
	carts.splice(numCompCard, 1);

	let numPlaCard = parseInt(Math.random() * carts.length);
	playerCard = carts[numPlaCard];
	carts.splice(numPlaCard, 1);

	showPlayerCard();
	document.getElementById('selec-att').disabled = false;
}

function showPlayerCard() {
	let divPlayCard = document.getElementById('player-card');
	divPlayCard.style.backgroundImage = `url(${playerCard.imagem})`;
	divPlayCard.style.backgroundSize = "cover";
	let divPlayName = document.querySelector("#player-card-name");	
	let playName = `<p>${playerCard.nome}</p>`;
	divPlayName.innerHTML = playName;

	let divPlayAttrib = document.querySelector("#player-attrib");
	let playAttrib = createAttrib();
	divPlayAttrib.innerHTML = playAttrib; 

	function createAttrib() {

		const attrName = Object.entries(playerCard.atributos);

		let totalAtri = "";

		for (let i = 0; i < attrName.length; i++) {
		totalAtri += "<button type='button' class='player-button seguranca' id='button-one' value='" + attrName[i][0] +  "'>" + attrName[i][0] + " : " + attrName[i][1] + "</button>";
		let attrOne = attrName[i][0];
		console.log(attrOne);
		i++;
		totalAtri += "<button type='button' class='player-button beleza' id='button-two' value='" + attrName[i][0] +  "'>" + attrName[i][0] + " : " + attrName[i][1]  + "</button>";
		let attrTwo = attrName[i][0];
		console.log(attrTwo);
		i++;
		totalAtri += "<button type='button' class='player-button natureza' id='button-three' value='" + attrName[i][0] +  "'>" +  attrName[i][0] + " : " + attrName[i][1] + "</button>";
		let attrThree = attrName[i][0];
		console.log(attrThree);
		i++;
		totalAtri += "<button type='button' class='player-button servicos' id='button-four' onclick='jogar()' value='" + attrName[i][0] +  "'>" +  attrName[i][0] + " : " + attrName[i][1]  + "</button>";
		let attrFour = attrName[i][0];
		console.log(attrFour);
		} 
		return totalAtri;
	}
}

function jogar() {
	let divComputerCard = document.getElementById('div-computer-card');
	divComputerCard.style.display = "block"; 
	let divResultado = document.getElementById("result");
	let atribSelec = document.getElementById("selec-att").value;

	if (playerCard.atributos[atribSelec] > computerCard.atributos[atribSelec]) {
		htmlResultado = '<p class="resultado-final">Venceu</p>';
		playerPoints++;
	} else if (playerCard.atributos[atribSelec] < computerCard.atributos[atribSelec]) {
		htmlResultado = '<p class="resultado-final">Perdeu</p>';
		computerPoints++;
	} else {
		htmlResultado = '<p class="resultado-final">Empatou</p>';
	}

	divResultado.innerHTML = htmlResultado;
	actualScore();
	actualNumCards();

	if (carts.length == 0) {
		alert ("Fim de jogo!");
		if (playerPoints > computerPoints) {
			alert ("Você ganhou da máquina!");
		} else if (computerPoints > playerPoints) {
			alert("A máquina ganhou!");
		} else {
			alert("Empatou!");
		}
	} else {
		document.getElementById('btnSortear').disabled = true;
		document.getElementById('btnNextGame').disabled = false;
		document.getElementById('selec-att').disabled = true;
		showCompCard();

	}
}



function showCompCard () { 
	let divPlayComp = document.getElementById('computer-card');

	divPlayComp.style.backgroundImage = `url(${computerCard.imagem})`;
	divPlayComp.style.backgroundSize = "cover";
	let divCompName = document.querySelector("#computer-card-name");	
	let CompName = `<p>${computerCard.nome}</p>`;
	divCompName.innerHTML = CompName;

	let divCompAttrib = document.querySelector("#comp-attrib");
	let CompAttrib = createAttrib();
	divCompAttrib.innerHTML = CompAttrib;


	function createAttrib() {

		const attrName = Object.entries(computerCard.atributos);
		console.log(attrName);

		let totalAtri = "";

		for (let i = 0; i < attrName.length; i++) {
		totalAtri += "<button type='button' class='player-button seguranca' id='button-one' value='" + attrName[i][0] +  "'>" + attrName[i][0] + " : " + attrName[i][1] + "</button>";
		let attrOne = attrName[i][0];
		console.log(attrOne);
		i++;
		totalAtri += "<button type='button' class='player-button beleza' id='button-two' value='" + attrName[i][0] +  "'>" + attrName[i][0] + " : " + attrName[i][1]  + "</button>";
		let attrTwo = attrName[i][0];
		console.log(attrTwo);
		i++;
		totalAtri += "<button type='button' class='player-button natureza' id='button-three' value='" + attrName[i][0] +  "'>" +  attrName[i][0] + " : " + attrName[i][1] + "</button>";
		let attrThree = attrName[i][0];
		console.log(attrThree);
		i++;
		totalAtri += "<button type='button' class='player-button servicos' id='button-four' onclick='jogar()' value='" + attrName[i][0] +  "'>" +  attrName[i][0] + " : " + attrName[i][1]  + "</button>";
		let attrFour = attrName[i][0];
		console.log(attrFour);
		} 
		return totalAtri;
	}
}

let NextGameButton = document.getElementById('btnNextGame');
NextGameButton.onclick = function nextGame() {
	hideCards();
	document.getElementById('btnSortear').disabled = false;
	document.getElementById('selec-att').disabled = true;
	document.getElementById('btnNextGame').disabled = true;

	let divResultadoo = document.getElementById('result');
	divResultadoo.innerHTML = "";
}

function hideCards () {
	let divPlayerCards = document.getElementById('div-player-card');
	divPlayerCards.style.display = "none";
	let divComputerCards = document.getElementById('div-computer-card');
	divComputerCards.style.display = "none";
}








