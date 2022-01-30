const cardSelection = document.querySelector("#cardSelection");
const fragment = document.createDocumentFragment();
const userCard = document.querySelector("#userCard");
const cardSelectionSorting = document.querySelector("#cardSelectionSorting")



function captureDate(){
//scope para agregar el value del input al bucle for  
  let numberUser = parseInt(document.getElementById("numberUser").value)
  let copyNumberUser = numberUser

  let icons = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
  let colors = ["text-danger", "text-dark"];
//for para agregar las cartas  
  for(let i = 0; i < copyNumberUser; i++){

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
  let numberCard = document.querySelectorAll("p");
  let iconsCard = document.querySelectorAll("#iconTop")
  console.log(numberCard)
  console.log(iconsCard)
  let arrayNumbers = [];
  let arrayIcons = [];
  console.log(arrayNumbers)
  console.log(arrayIcons)
 
  for(let i = 0;i < numberCard.length ; i++){
    console.log(numberCard[i].innerText)
    arrayNumbers.push(numberCard[i].innerText)
  }

  for(let i = 0;i < iconsCard.length ; i++){
    console.log(iconsCard[i].innerText)
    arrayIcons.push(iconsCard[i].innerText)
  }

}