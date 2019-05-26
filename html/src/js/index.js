const diceElement = document.getElementById('dice');
const buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', throwDice);

function throwDice(){
  const number =  1 + Math.floor(Math.random() * 6);
  diceElement.textContent = number;
}