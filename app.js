const cardSelection = document.querySelector("#cardSelection");
const fragmentSelection = document.createDocumentFragment();
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
    fragmentSelection.appendChild(clone)
  }
  //agrega el fragmento creado con for a la tag row de html 
  cardSelection.appendChild(fragmentSelection)
}  

function sortingCard(){
  let numberCard = document.querySelectorAll("p");
  let iconsCard = document.querySelectorAll("#iconTop")
  let arrayNumbers = [];
  let arrayIcons = [];
  
  for(let i = 0;i < numberCard.length ; i++){
    console.log(numberCard[i].innerText)
    arrayNumbers.push(numberCard[i].innerText)
  }

  for(let i = 0;i < iconsCard.length ; i++){
    console.log(iconsCard[i].innerText)
    arrayIcons.push(iconsCard[i].innerText)
  }

  //let listaNumeros = [3,7,2,9,1,4,6,5,8];
  function burbuja (arr){
  for(let i = 0; i < arr.length -1; i++){//if anidados
    for(let j = 0; j < arr.length -1; j++){
      if(arr[j] > arr[j+1]){//ejecutara la funcion si el indice 0 es mayor que el 1
        let aux = arr[j]//se crea variable para guardar el valor del elemento en el indice 0
        arr[j] = arr[j+1]//el valor del indice 0 desde ahora tendrá el valor del indice 1
        arr[j + 1]= aux//el valor del indice 1 desde ahora tendrá el valor del indice 0
        console.log(arr)//imprime cada vuelta del ordenamiento, ver como hacer que se represente en las cartas
      }
    }
  }
}
burbuja(arrayNumbers);//se asigna como argumento de la funcion el array de numeros capturados
console.log(typeof(arrayNumbers))//para comprobar el tipo de valor

}

//--------------------------------------------
/*
Queda por solucionar el orden de las letras, cosa de que A sea 1 y las letras j,q,k sean
10, 11,13 para que al momento de aplicar la funcion burbuja, estos queden en el orden correcto.


Queda por solucionar representar el orden en cartas con sus respectivos iconos dentro de la fila bubble log.
*/









/* const arr = [2,4,6,8]

const nuevoArr = arr.map(i => i +2)
console.log(nuevoArr)

const nuevoArrDos = arr.filter(i => i <5)
console.log(nuevoArrDos); */

/* for ( let i  = 0; i < 10; i++){
  for(let j = 0; j < 10 -i; j++){
    console.log(j + 1 +". Me gusta el pan")  
  }
  console.log(i + 1 +". hola soy un ciclo")
} */
/* let listaNumeros = [3,7,2,9,1,4,6,5,8];
function burbuja (arr){
  for(let i = 0; i < arr.length -1; i++){
    for(let j = 0; j < arr.length -1; j++){
      if(arr[j] > arr[j+1]){
        let aux = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1]= aux
        console.log(arr)
      }
    }
  }
}
burbuja(listaNumeros); */
