window.darkmode = darkmode;

function darkmode() {
  let element = document.body;
  element.classList.toggle("dark");
}

let cards = [];

let elementoPai = document.getElementById("elementoPai");

//POSTAGEM
let Post = {
  title: "",
  description: "",
  imgUrl: "",
};

let submit = document.getElementById("submit");

//TESTE CONSOLE
let verPost = () => console.log(Post);
let verFelinosAtual = () => console.log(cards);

//RENDERIZA ULTIMA OBJETO/POSTAGEM DO ARRAY

let lastPost = () => {
  let lastPostNumber = cards.length - 1;

  let card = `<img src="${cards[lastPostNumber].imgUrl}">
                  <h2>${cards[lastPostNumber].title}</h2>
                  <p>${cards[lastPostNumber].description}</p>`;
  let novaDiv = document.createElement("div");
  novaDiv.className = "item";
  novaDiv.innerHTML = card;
  let firstChild = elementoPai.firstChild;
  elementoPai.insertBefore(novaDiv, firstChild);
  novaDiv.addEventListener("click", () => {
    novaDiv.remove();
  });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();

  Post.title = document.getElementById("GET-title").value;
  Post.description = document.getElementById("GET-description").value;
  Post.imgUrl = document.getElementById("GET-imageUrl").value;

  cards.push(Post);
  verPost();
  verFelinosAtual();
  lastPost();
});
