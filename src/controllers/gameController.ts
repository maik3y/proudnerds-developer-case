import { action, computed, makeObservable, observable } from "mobx";

export default class GameController {
  
  @observable
  private _gameStarted: boolean;

  public constructor () {
    makeObservable(this); // This is to enable Mobx decorators: https://mobx.js.org/enabling-decorators.html
    this._gameStarted = false;
  }

  @action
  public startGame(): void {
    this._gameStarted = true;
  }

  @computed
  public get gameStarted(): boolean {
    return this._gameStarted;
  }
}