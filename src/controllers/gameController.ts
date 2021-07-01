import { action, computed, makeObservable, observable } from "mobx";
import Card from "../components/deck/card";
import Deck from "../components/deck/deck";
import Player from "../stores/playerStore";
import PlayerController from "./playerController";
import RulesController from "./rulesController";
import TurnsController from "./turnsController";

export const AMOUNT_OF_PLAYERS = 4;
export const AMOUNT_OF_CARDS_TO_DEAL = 7;
export default class GameController {

  private _playerController: PlayerController;
  private _rulesController: RulesController;
  private _turnsController: TurnsController;
  
  @observable
  private _gameStarted = false;

  @observable
  private _gameEnded = false;

  @observable
  private _currentInfoMessage = "";

  @observable
  private _deck: Deck;
  
  @observable
  private _discardPile: Deck;

  public constructor (PlayerController: PlayerController) {
    makeObservable(this); // This is to enable Mobx decorators: https://mobx.js.org/enabling-decorators.html

    this._deck = new Deck();
    this._discardPile = new Deck(true);
    this._playerController = PlayerController;
    this._rulesController = new RulesController();
    this._turnsController = new TurnsController(this._playerController.players);
  }

  /*
   * Start the game by shuffleing, dealing and drawing a starting card
   */
  @action
  public startGame(): void {
    this._deck.shuffle();
    this.dealCards();
    this.drawStartingCard();
    this._gameStarted = true;
  }

  /*
   * Resets everything, then a fresh game is started
   */
  @action
  public restart(): void {
    this._turnsController.restart();
    this._playerController.clearHands();
    this.setGameEnded(false);
    this.setGameEnded(false);
    this.resetDiscardPile();
    this.resetDeck();
    this.startGame();
  }

  /*
   * Give each player the amount of cards required to start the game
   */
  @action
  public dealCards(): void {
    this._playerController.players.forEach((player: Player): void => {
      for (let j = 0; j < AMOUNT_OF_CARDS_TO_DEAL; j++) {
        player.giveCard(this._deck.drawCard());
      }
    });
  }
  
  /*
   * Puts the first card from the deck onto the discard pile
   */
  @action
  public drawStartingCard(): void {
    this._discardPile.addCard(this._deck.drawCard());
  }

  /*
   * Player put a card on the discard pile
   */
  @action
  public playCard(player: Player, card: Card): void {
    if (this._turnsController.validatePlayerTurn(player) && this._rulesController.turnIsValid(card, this._discardPile.topCard)) {
      // Move a card from the players hand onto the discard pile
      player.playCard(card);
      this._discardPile.addCard(card);

      // Register that a card has been played this turn
      this._turnsController.setCurrentPlayerHasPlayedCard(true);

      // To give player time to warn others we DONT go to next turn once a player has only one card left
      if (player.cards.length !== 1) {
        this.nextTurn();
        this.setCurrentInfoMessage("");
      }

      // End the game when a players has no more cards to play
      if (player.cards.length === 0) {
        player.setIsWinner(true);
        this.setGameEnded();
      }
    }
  }

  @action
  public nextTurn(): void {
    this._turnsController.nextTurn();
  }
  
  /*
   * Draw one or multiple cards
   */
  @action
  public draw(amount: number): void {
    for (let i = amount; i > 0; i--) {
      const player = this._turnsController.getPlayerByCurrentTurn();
      player.giveCard(this._deck.drawCard());
      player.setCalledLastCard(false);
      this._turnsController.nextTurn();
    }

    // If after drawing the deck has no more cards we use the discard pile as new deck, shuffle and draw the first card again.
    if (this._deck.numberOfCards === 0) {
      this.shuffleDiscardPileToFreshDeck();
    }
  }

  /*
   * Reshuffle the used cards to make a new deck
   */
  @action
  public shuffleDiscardPileToFreshDeck(): void {
    this._deck = this._discardPile;
    this._discardPile = new Deck(true);
    this._deck.shuffle();
    this.drawStartingCard();
  }

  @action
  public resetDeck(): void {
    this._deck = new Deck();
    this._deck.shuffle();
  }

  @action
  public resetDiscardPile(): void {
    this._discardPile = new Deck(true);
  }

  @computed
  public get discardPile(): Deck {
    return this._discardPile;
  }
  
  @computed
  public get gameStarted(): boolean {
    return this._gameStarted;
  }

  @computed
  public get gameEnded(): boolean {
    return this._gameEnded;
  }

  @action
  public setGameEnded(ended = true): void {
    this._gameEnded = ended;
  }

  @computed
  public get deck(): Deck {
    return this._deck;
  }

  @computed
  public get currentPlayerTurn(): Player {
    return this._turnsController.getPlayerByCurrentTurn();
  }

  @computed
  public get currentPlayerhasPlayedCard(): boolean {
    return this._turnsController.currentPlayerHasPlayedCard;
  }

  @action
  public setCurrentInfoMessage(message: string): string {
    return this._currentInfoMessage = message;
  }

  @computed
  public get currentInfoMessage(): string {
    return this._currentInfoMessage;
  }

  @action
  public getWinner(): string {
    return this._playerController.getWinner()?.name || "";
  }
}