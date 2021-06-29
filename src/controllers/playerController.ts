import { action, computed, makeObservable, observable } from "mobx";
import Card from "../components/deck/card";

interface Player {
  name: string;
  cards?: Card[];
}

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

  @action
  public addPlayer(name: string):void {
    this.players.push({name: name});
  }
}