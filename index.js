 import listaFelinos from "./db.js";

window.onload = function () {
  percorreListaFelinos();
};

window.darkmode = darkmode;

function darkmode() {
  let element = document.body;
  element.classList.toggle("dark");
}

let elementoPai = document.getElementById("elementoPai");

function percorreListaFelinos() {
  listaFelinos.map((felino) => {
    let card = `<img src="${felino.imgUrl}">
                  <h2>${felino.title}</h2>
                  <p>${felino.description}</p>`;
    let novaDiv = document.createElement("div");
    novaDiv.className = "item";
    novaDiv.innerHTML = card;
    elementoPai.appendChild(novaDiv);
  });
}
//POSTAGEM
let Post = {
  title: "",
  description: "",
  imgUrl: "",
};

let submit = document.getElementById("submit");

//TESTE CONSOLE
let verPost = () => console.log(Post);
let verFelinosAtual = () => console.log(listaFelinos);

//RENDERIZA ULTIMA OBJETO/POSTAGEM DO ARRAY

let lastPost = () => {
  let lastPostNumber = listaFelinos.length -1
  
    let card = `<img src="${listaFelinos[lastPostNumber].imgUrl}">
                  <h2>${listaFelinos[lastPostNumber].title}</h2>
                  <p>${listaFelinos[lastPostNumber].description}</p>`;
    let novaDiv = document.createElement("div");
    novaDiv.className = "item";
    novaDiv.innerHTML = card;
    let firstChild = elementoPai.firstChild ;
    elementoPai.insertBefore(novaDiv,firstChild)
  };

submit.addEventListener("click", (e) => {
  e.preventDefault();

  Post.title = document.getElementById("GET-title").value;
  Post.description = document.getElementById("GET-description").value;
  Post.imgUrl = document.getElementById("GET-imageUrl").value;

  listaFelinos.push(Post);
  verPost();
  verFelinosAtual();
  lastPost();
});
