import { action, computed, makeObservable, observable } from "mobx";
import Card from "../components/deck/card";

export default class Player {
    @observable
    public _name: string;

    @observable
    public _calledLastCard = false;

    @observable
    public _isWinner = false;
    
    @observable
    public _cards: Card[] = [];
  
    public constructor (name: string) {
      makeObservable(this); // This is to enable Mobx decorators: https://mobx.js.org/enabling-decorators.html
      this._name = name;
    }
  
    /*
     * Recieve a new card (from the deck)
     */
    @action
    public giveCard(card: Card): void {
      this._cards.push(card);
    }

    /*
     * Remove card from players hand
     */
    @action
    public playCard(card: Card): void {
      const index = this._cards.indexOf(card);
      if (index > -1) {
        this._cards.splice(index, 1);
      }
    }
  
    /*
     * Removes all card from the players hand
     */
    @action
    public clearHand(): void {
      this._cards = [];
      this.setCalledLastCard(false);
    }
  
    @computed
    public get name():string {
      return this._name;
    }
  
    @computed
    public get cards(): Card[] {
      return this._cards;
    }

    @computed
    public get hasOneCardLeft(): boolean {
      return this._cards.length === 1;
    }

    @action
    public setCalledLastCard(called: boolean): void {
      this._calledLastCard = called;
    }

    @computed
    public get calledLastCard(): boolean {
      return this._calledLastCard;
    }

    @action
    public setIsWinner(isWinner: boolean): void {
      this._isWinner = isWinner;
    }

    @computed
    public get isWinner(): boolean {
      return this._isWinner
    }
  }