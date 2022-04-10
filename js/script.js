/*
Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
*/
const items = [{photo:"img/01.jpg",title:"Svezia",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."},
  {photo:"img/02.jpg",title:"Svizzera",text:"Lorem ipsum"},
  {photo:"img/03.jpg",title:"Gran Bretagna",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  {photo:"img/04.jpg",title:"Germania",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"},
  {photo:"img/05.jpg",title:"Paradise",text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"}
];


//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < items.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${items[i].photo}" />
      <div class="title">
        <h2>${items[i].title}</h2>
        <p>${items[i].text}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${items[i].photo}" alt="" />
  </div>`;
}
//console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const ElementContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
//console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
ElementContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

let Change = setInterval(ChangePhoto, 3000);

const Stop = document.getElementById("stop");
Stop.addEventListener("click", StopChangePhoto)
function StopChangePhoto(){
 clearTimeout(Change);
 }

function ChangePhoto() {
  //prendere immagine con currentIndexActive e togliere classe active
  const CurrentImage = document.getElementsByClassName("item");
  CurrentImage[currentIndexActive].classList.remove("active");
  const CurrentThumbs = document.getElementsByClassName("thumb");
  CurrentThumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }
  //console.log(currentIndexActive);
  CurrentImage[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  CurrentThumbs[currentIndexActive].classList.add("active");
}


