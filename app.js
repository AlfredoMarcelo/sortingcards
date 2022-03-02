const cardSelection = document.querySelector("#cardSelection");
const fragmentSelection = document.createDocumentFragment();
const fragmentSorting = document.createDocumentFragment();
const userCard = document.querySelector("#userCard");
const userCardSorting = document.querySelector("#userCardSorting");
const cardSelectionSorting = document.querySelector("#cardSelectionSorting")


function captureDate(){
//scope para agregar el value del input al bucle for  
  let numberUser = document.getElementById("numberUser").value
  let copyNumberUser = numberUser

  let icons = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];//24negro ||27 pinta negro 29-30rojo
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,];
  let colors = ["text-danger", "text-dark"];

  
//for para agregar las cartas  
  for(let i = 0; i < copyNumberUser; i++){

    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    /* console.log(randomNumber) */
    let randomIconCard = icons[Math.floor(Math.random() * icons.length)];
    /* console.log(randomIconCard); */
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let numero = {numero :randomNumber}
    let icono = {icono:randomIconCard}
    let color = {color:randomColor}

    let uni={...numero,...icono,...color}
    saveCard(uni)
    

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

const dataCard = []
const saveCard =(datos)=>{
  dataCard.push(datos)
  console.log(datos)  
}

function sortingCard(){
  let newList = dataCard.map((item)=>item)
  console.log(newList)
 burbuja(newList) ;//se asigna como argumento de la funcion el array de numeros capturados******funcionando
  function burbuja (arr){
  for(let i = 0; i < arr.length -1; i++){//if anidados
    for(let j = 0; j < arr.length -1; j++){
      if(arr[j].numero > arr[j+1].numero){//ejecutara la funcion si el indice 0 es mayor que el 1
        let aux = arr[j]//se crea variable para guardar el valor del elemento en el indice 0
        arr[j] = arr[j+1]//el valor del indice 0 desde ahora tendrá el valor del indice 1
        arr[j + 1]= aux//el valor del indice 1 desde ahora tendrá el valor del indice 0
        //imprime cada vuelta del ordenamiento, ver como hacer que se represente en las cartas
        console.log(arr)//imprime cada vuelta del ordenamiento, ver como hacer que se represente en las cartas
        //imprime cada vuelta del ordenamiento, ver como hacer que se represente en las cartas
      }
      arr.map((card)=>{
        let clone = userCardSorting.content.firstElementChild.cloneNode(true)
        clone.querySelector("#numberCardSort").textContent = card.numero;
        fragmentSorting.appendChild(clone)
        cardSelectionSorting.appendChild(fragmentSorting)
      })
    }
  }
}
}



/* arr.map((item,i)=>item,i) */