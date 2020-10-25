const image1 = document.querySelectorAll("img")[0];
const image2=document.querySelectorAll("img")[1];

const dice1=document.querySelector('.btn-1');
const dice2=document.querySelector('.btn-2');

var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
image1.setAttribute("src", randomImageSource);


var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
image2.setAttribute("src", randomImageSource2);

// dice1.addEventListener('click',()=>{
//   randomDiceImage = "dice" + randomNumber1 + ".png"; 
//   randomImageSource = "images/" + randomDiceImage;
//   image1.setAttribute("src", randomImageSource);
// })

// dice2.addEventListener('click',()=>{
//   randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// image2.setAttribute("src", randomImageSource2);
// })



//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.body.classList.add('player1wins');
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
  document.body.classList.add('player2wins');
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
  document.body.classList.add('draw');
}
