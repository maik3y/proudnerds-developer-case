import Card from "./card";
import cards from "./cards.json";

export default class Deck {

  public cards: Card[];

  public constructor(cards = freshDeck()) {
    this.cards = cards
  }

  public get numberOfCards(): number {
    return this.cards.length
  }

  public pop(): Card | undefined {
    return this.cards.shift()
  }

  public push(card: Card): void {
    this.cards.push(card)
  }

  public shuffle(): void {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

/*
 * Return a fresh deck of cards
 */
const freshDeck = (): Card[] => {
  return cards.suits.flatMap(suit => {
    return cards.values.map(value => {
      return new Card(suit, value)
    });
  });
}