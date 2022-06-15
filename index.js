window.darkmode = darkmode;

const storage = window.sessionStorage;

function darkmode() {
  let element = document.body;
  element.classList.toggle("dark");
}

let cards = [];

let elementoPai = document.getElementById("elementoPai");

let submit = document.getElementById("submit");

//RENDERIZA ULTIMA OBJETO/POSTAGEM DO ARRAY

let renderizarPost = (postagem) => {
  let card = `
    <img src="${postagem.imgUrl}">
    <h2>${postagem.title}</h2>
    <p>${postagem.description}</p>
  `;

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

  //TESTE CONSOLE
  let verPost = () => console.log(Post);
  let verCardAtual = () => console.log(cards);

  //POSTAGEM
  let Post = {
    title: "",
    description: "",
    imgUrl: "",
  };

  Post.title = document.getElementById("GET-title").value;
  Post.description = document.getElementById("GET-description").value;
  Post.imgUrl = document.getElementById("GET-imageUrl").value;

  cards.push(Post);
  verPost();
  verCardAtual();
  renderizarPost(Post);
  
  
  const cardsForJson =  JSON.stringify(cards)
  
  console.log(cardsForJson)
  storage.setItem("cards", cardsForJson)
  
});


window.onload = () => {

  
  const getItemStorage = storage.getItem("cards")

 console.log(storage)

 if (getItemStorage) {
   cards = JSON.parse(getItemStorage)
   
   cards.forEach(elemento => {
     renderizarPost(elemento)
    });
 }
}