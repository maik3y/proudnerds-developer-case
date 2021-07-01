import { action, computed, makeObservable, observable } from "mobx";
import Player from "../stores/playerStore";
import { AMOUNT_OF_PLAYERS } from "./gameController";

export default class TurnsController {
  
@observable
private _turnNo: number;

@observable
private _cardPlayedThisTurn = false;

private _players: Player[];

  public constructor (players: Player[]) {
    makeObservable(this); // This is to enable Mobx decorators: https://mobx.js.org/enabling-decorators.html

    this._turnNo = 0;
    this._players = players;
  }

  public restart(): void {
    this._turnNo = 0;
  }

  @action
  public nextTurn(): void {
    this.setCurrentPlayerHasPlayedCard(false);

    // Increment player turns and reset to player 1 when everyone has had a turn
    if (this._turnNo === AMOUNT_OF_PLAYERS -1) this._turnNo = -1;
    this._turnNo++;
  }

  public validatePlayerTurn(player: Player): boolean {
    return player === this.getPlayerByCurrentTurn();
  }

  public getPlayerByCurrentTurn(): Player {
    return this._players[this._turnNo];
  }
  
  @computed
  public get cardPlayedThisTurn(): boolean {
    return this._cardPlayedThisTurn;
  }

  @action
  public setCurrentPlayerHasPlayedCard(cardPlayed: boolean): void {
    this._cardPlayedThisTurn = cardPlayed;
  }

  @computed
  public get currentPlayerHasPlayedCard(): boolean {
    return this._cardPlayedThisTurn;
  }
}