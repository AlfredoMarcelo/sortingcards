/* for (let i = 0; i < 10; i++) {
  //imprime el for de a 10 veces osea 10 veces 10  hola desde a.
  for (let a = 0; a < 10 - i; a++) {
    console.log(a + 1 + ". hola desde a"); //imprime 10
  }
  console.log(i + 1 + ". Hola desde i");
}
 */
let cards = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
let colors = ["text-danger", "text-dark"];
console.log(cards);
console.log(numbers);
console.log(colors);

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
