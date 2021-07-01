import { action, computed, observable } from "mobx";
import Card from "./card";
import cards from "./cards.json";

export default class Deck {

  @observable
  private _cards: Card[] = [];

  public constructor(emptyDeck = false) {
    this._cards = !emptyDeck ? this.newDeck() : [];
  }

  @computed
  public get numberOfCards(): number {
    return this._cards.length
  }

  @action
  public drawCard(): Card {
    return this._cards.shift() !; // Non-Null Assertion to fix undefined assumption
  }

  @action
  public addCard(card: Card): void {
    this._cards.push(card)
  }

  @computed
  public getCards(): Card[] {
    return this._cards;
  }

  @computed
  public get topCard(): Card {
    return this._cards[this._cards.length - 1];
  }

  /*
   * Loop through all cards and swap them with another card that hasn't been 'touched' yet 
   */
  public shuffle(): void {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this._cards[newIndex];
      this._cards[newIndex] = this._cards[i];
      this._cards[i] = oldValue;
    }
  }

  /*
   * Return a fresh deck of cards (from json data file)
   */
  private newDeck = (): Card[] => {
    return cards.suits.flatMap(suit => {
      return cards.values.map(value => {
        return new Card(suit, value);
      });
    });
  }
}