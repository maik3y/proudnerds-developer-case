import { action, makeObservable, observable } from "mobx";
import Player from "../stores/playerStore";

export default class PlayerController {
  
  @observable
  private _players: Player[];

  public constructor (players = []) {
    makeObservable(this); // This is to enable Mobx decorators: https://mobx.js.org/enabling-decorators.html
    this._players = players;
  }

  public get players(): Player[] {
    return this._players;
  }

  /*
   * Create a new player
   */
  @action
  public newPlayer(name: string): void {
    this._players.push(new Player(name));
  }

  /*
   * Clears cards from each players hand
   */
  @action
  public clearHands(): void {
    this._players.forEach((player: Player): void=>{
      player.clearHand();
    });
  }

  /*
   * Gets winner
   */
  @action
  public getWinner(): Player | undefined {
    return this.players.find(player => player.isWinner === true);
  }
}