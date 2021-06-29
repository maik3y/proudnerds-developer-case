export default class Card {
  private suit: string;
  private value: string;

  public constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }

  public get color(): string {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }
}
  