const startBtn = document.querySelector(".start-btn");
const messageText = document.querySelector(".message");
const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");
const newCardBtn = document.querySelector(".newcard-btn");
const playerel = document.querySelector("#player-el");
const newGameBtn = document.querySelector(".newGame-btn");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Gouse",
  chips: 150,
};

playerel.textContent = `${player.name} : $${player.chips}`;

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; //1 -> 13

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (cards.length <= 0) {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    sum += firstCard + secondCard;
    cards.push(firstCard, secondCard);
    renderGame();
  }
}

function renderGame() {
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i <= cards.length - 1; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  if (isAlive === true && hasBlackJack === false) {
    newGameBtn.style.display = "none";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageText.textContent = message;
}

startBtn.addEventListener("click", startGame);

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const newCard = getRandomNumber();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }

  if (isAlive === false || hasBlackJack === true) {
    newGameBtn.style.display = "block";
  }
}
newCardBtn.addEventListener("click", newCard);

function newGame() {
  cards = [];
  sum = 0;
  startGame();
}

newGameBtn.addEventListener("click", newGame);
