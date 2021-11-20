let firstCard = 10
let secondCard = 30
let cards = [firstCard , secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl  = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function startGame() {
    renderGame()
}
function renderGame()
{
     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
}


