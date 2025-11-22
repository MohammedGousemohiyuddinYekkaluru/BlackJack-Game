const startBtn = document.querySelector('.start-btn');
const messageText = document.querySelector('.message');
const sumEl = document.querySelector('.sum-el');
const cardsEl = document.querySelector('.cards-el');
const newCardBtn = document.querySelector('.newcard-btn')

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

startBtn.addEventListener('click', () => {

    sumEl.textContent = `Sum : ${sum}`
    cardsEl.textContent = `Cards : ${firstCard} ${secondCard}`

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageText.textContent = message
})

newCardBtn.addEventListener('click', () => {
    console.log("new card btn clicked")
})

