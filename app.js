const cardSelection = document.querySelector("#cardSelection");
const fragment = document.createDocumentFragment();
let userCard = document.querySelector("#userCard");
const cardSelectionSorting = document.querySelector("#cardSelectionSorting")



function captureDate(){
//scope para agregar el value del input al bucle for  
  let numberUser = parseInt(document.getElementById("numberUser").value)
  let a = numberUser

  let icons = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
  let colors = ["text-danger", "text-dark"];
//for para agregar las cartas  
  for(let i = 0; i < a; i++){

    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(randomNumber)
    let randomIconCard = icons[Math.floor(Math.random() * icons.length)];
    console.log(randomIconCard);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let clone = userCard.content.firstElementChild.cloneNode(true);
    clone.querySelector("#numberCard").textContent = randomNumber;
    let iconTop = clone.querySelector("#iconTop")
    iconTop.innerHTML = randomIconCard;
    iconTop.classList.add(randomColor);
    let iconButtom = clone.querySelector("#iconButtom");
    iconButtom.innerHTML = randomIconCard;
    iconButtom.classList.add(randomColor);
    //se agrega el clone a fragment
    fragment.appendChild(clone)
  }
  //agrega el fragmento creado con for a la tag row de html 
  cardSelection.appendChild(fragment)
}  

function sortingCard(){
  
}






/* let numberCard = document.querySelectorAll("p");
//console.log(numberCard)
let arrayNumber = [""];
//console.log(arrayNumber)

for(let i = 0;i < numberCard.length ; i++){
  //console.log(numberCard[i].innerText)
  arrayNumber.push(numberCard[i].innerText)
} */

/* let parrafo = document.createElement("p")
parrafo.innerHTML = "Hola desde el boton sort";
let cloneDos = fragment
console.log(cloneDos) */


/* for (let i = 0; i < 10; i++) {
  //imprime el for de a 10 veces osea 10 veces 10  hola desde a.
  for (let a = 0; a < 10 - i; a++) {
    console.log(a + 1 + ". hola desde a"); //imprime 10
  }
  console.log(i + 1 + ". Hola desde i");
}
 */


/* 
let cards = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
let colors = ["text-danger", "text-dark"];
 */

/* 
function displayCards() {
  let singleCard = cards[Math.floor(Math.random() * cards.length)];
  let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let changeColor = colors[Math.floor(Math.random() * colors.length)];
  let showNumber = singleNumber;
  let showCard = singleCard;
  let showColor = changeColor;
  const number = document.getElementById("number");
  number.innerHTML = showNumber;
  const iconTop = document.getElementById("iconTop");
  iconTop.innerHTML = showCard;
  iconTop.classList.add(showColor);
  const iconButtom = document.getElementById("iconButtom");
  iconButtom.classList.add(showColor);
  iconButtom.innerHTML = showCard;
}
displayCards();
const button = document.querySelector("button");
button.addEventListener("click", () => displayCards()); */
