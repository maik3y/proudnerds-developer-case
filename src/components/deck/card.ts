export default class Card {
  private _suit: string;
  private _value: string;

  public constructor(suit: string, value: string) {
    this._suit = suit;
    this._value = value;
  }

  // Determine card color
  public get color(): string {
    return this._suit === "♣" || this._suit === "♠" ? "black" : "red"
  }

  public get value(): string {
    return this._value;
  }

  public get suit(): string {
    return this._suit;
  }
}
  