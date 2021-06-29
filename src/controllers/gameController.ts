export default class GameController {
  
  private _gameStarted = false;

  public startGame() {
    this._gameStarted = true;
  }

  public endGame() {
    this._gameStarted = false;
  }

  public get gameStarted() {
    return this._gameStarted;
  }
}