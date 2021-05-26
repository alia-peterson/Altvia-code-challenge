
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
})
