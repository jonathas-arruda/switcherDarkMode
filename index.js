import listaFelinos from "./db.js"

window.onload = function () {
  percorreListaFelinos();
};
window.darkmode = darkmode;

function darkmode(){
  let element = document.body;
  element.classList.toggle("dark");
};

let elementoPai = document.getElementById("elementoPai");

function percorreListaFelinos() {
  listaFelinos.map((felino) => {
    let card = `<img src="${felino.imgURL}">
                <h2>${felino.titulo}</h2>
                <p>${felino.descricao}</p>`;
    let novaDiv = document.createElement("div");
    novaDiv.className ="item";
    novaDiv.innerHTML = card;
    elementoPai.appendChild(novaDiv);
    
  });
}