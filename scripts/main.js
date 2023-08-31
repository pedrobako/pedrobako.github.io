alert("Iniciando o javaScript!");

function qualSaudacaoUsar(hora){	
	let saudacao;
	let nome = prompt("Por favor, digite o seu nome");
	while(!nome){
		nome = prompt("Por favor, digite o seu nome");
	}
	
	localStorage.setItem("name", nome);
	if (hora >= 6 && hora < 12){
		saudacao = "Bom dia!";
	}
	else if (hora >= 12 && hora < 18){
		saudacao = "Boa tarde!";
	}
	else if (hora >= 18 || hora < 6){
		saudacao = "Boa noite!";
	}
	
	saudacao = saudacao + " " + nome + ".";
	
	return saudacao;
}
let dataHoraAtual = new Date();
let horaAtual = dataHoraAtual.getHours();
const myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
let saudacao = qualSaudacaoUsar(horaAtual);

myHeading.textContent = saudacao;

document.querySelector("html").addEventListener("click", function () {
  alert("Ai! Pare de me cutucar!");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/imagem1.png") {
    myImage.setAttribute("src", "imagens/imagem2.png");
  } else {
    myImage.setAttribute("src", "imagens/imagem1.png");
  }
};

myButton.onclick = () => {
	horaAtual = dataHoraAtual.getHours();
	saudacao = qualSaudacaoUsar(horaAtual);
	myHeading.textContent = saudacao;
}