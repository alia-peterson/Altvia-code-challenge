
let cards = []
let buttonCounter = 0

const shuffleButton = document.querySelector('.button')

window.onload = () => {
    createCardDeck()
    displayCards()

    shuffleButton.addEventListener('click', () => {
        shuffleCards()
        displayCards()
    })
}

const createCardDeck = () => {
    for (let i = 1; i < 53; i++) {
        cards.push(i)
    }
}

const shuffleCards = () => {
    let newCards = []

    while(cards.length > 0) {
        const random = Math.floor(Math.random() * Math.floor(cards.length))
        newCards.push(cards[random])
        cards.splice(random, 1)
    }

    cards = newCards
    buttonCounter++
}

const displayCards = () => {
    const cardContainer = document.querySelector('.container')
    const box = document.createElement('section')
    box.classList.add('box')

    cards.forEach((card, i) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        cardElement.innerText = card

        box.appendChild(cardElement)
    })

    const newSectionHeader = document.createElement('p')
    newSectionHeader.innerText = `Shuffle number ${buttonCounter}:`

    cardContainer.appendChild(newSectionHeader)
    cardContainer.appendChild(box)
}

// export functions for testing 
if (typeof module !== 'undefined') {
    module.exports = { cards, buttonCounter, createCardDeck, shuffleCards }
}
