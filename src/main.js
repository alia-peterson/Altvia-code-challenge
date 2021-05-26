
let cards = []
const shuffleButton = document.querySelector('.button')

shuffleButton.addEventListener('click', shuffleCards)

for (let i = 1; i < 53; i++) {
    cards.push(i)
}

function shuffleCards() {
    let newCards = []

    while(cards.length > 0) {
        const random = Math.floor(Math.random() * Math.floor(cards.length))
        newCards.push(cards[random])
        cards.splice(random, 1)
    }

    cards = newCards
}
