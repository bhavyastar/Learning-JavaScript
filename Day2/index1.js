let player = {
    name1: "Per" ,
    chips: 200
}
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl  = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name1 + ": $" + player.chips
function getRandomcard() {
 let randomNumber = Math.floor(Math.random()*32) + 1
 if(randomNumber>10){
     return 10
 } else if (randomNumber === 1) {
     return 11
 }
 else {
     return randomNumber
 }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame()
{
     cardsEl.textContent = "Cards: " 
     for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
     sumEl.textContent = "Sum: " + sum
    if(sum<=21)
     {
        message = "Do you want a new card?"
    }
    else if(sum===21)
    {
        message = "You have got Black Jack"
        hasBlackJack = true
    } 
else {
    message = "You are out of Game"
    isAlive = False
}    

messageEl.textcontent = message
}
function newCard()
{
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}



