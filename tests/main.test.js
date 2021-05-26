
const { cards, buttonCounter, createCardDeck, shuffleCards } = require('../src/main')

describe("main.js functions", () => {
    it("Should be able to create a cards array", () => {
        expect(cards).toEqual([])

        createCardDeck()

        expect(cards[0]).toEqual(1)
        expect(cards[1]).toEqual(2)
        expect(cards[51]).toEqual(52)
        expect(cards.length).toEqual(52)
    })

    it("Should increment the button counter when the cards are shuffled", () => {
        expect(buttonCounter).toEqual(0)

        expect(shuffleCards().buttonCounter).toEqual(1)
    })

    it("Should be able to shuffle the cards array", () => {
        const newCards = shuffleCards().cards

        expect(newCards.length).toEqual(52)
        expect(newCards[0]).not.toEqual(1)
    })
})
