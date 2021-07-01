import Card from "../components/deck/card";

export default class RulesController {
  
  /*
   * Check if the players move is a valid one
   */
  public turnIsValid(playedCard: Card, topDiscardCard: Card): boolean {
      return this.suitOrValueMatches(playedCard, topDiscardCard);
  }


  /*
   * Returns true if cards match
   */
  public suitOrValueMatches(playedCard: Card, topDiscardCard: Card): boolean {
    return (playedCard.suit === topDiscardCard.suit || playedCard.value === topDiscardCard.value);
  }

  // TODO: Jack can always be put on top of the discard pile
}