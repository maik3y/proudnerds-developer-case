import { action, observable } from "mobx";

export default class GameController {
  
  @observable
  private _gameStarted = false;

  @action
  public startGame() {
    this._gameStarted = true;
  }

  @action
  public endGame() {
    this._gameStarted = false;
  }

  public get gameStarted() {
    return this._gameStarted;
  }
}