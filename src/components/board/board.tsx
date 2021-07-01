import Button from '@material-ui/core/Button';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { GameControllerContext, PlayerControllerContext } from '../../stores/storesContext';
import './board.scss';
import styled from 'styled-components';
import Winner from '../winner/winner';

const Board = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);
  const playerController = useContext(PlayerControllerContext);

  // A little lazy but it works for now!
  const refreshPage = (): void => {
    window.location.reload();
  };

  return (
    <>
      {gameController.gameEnded && <Winner />}
      <div className="board">
        <div className="board__header">
          <div className="board__header__actions">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={(): void => {
                refreshPage();
              }}>
              Player selection
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={(): void => {
                gameController.restart();
              }}>
              Shuffle &amp; restart
            </Button>
          </div>
          <Typography component="h2" variant="h2" align="center" gutterBottom>
            {gameController.currentInfoMessage}
          </Typography>
        </div>
        <div className="board__content">
          {playerController.players.map((player) => {
            return (
              <div className="board__player" key={player.name}>
                <div className="board__player__info">
                  <div className="board__player__info__name">
                    <Typography variant="body1" align="center">
                      {player.name}
                    </Typography>
                  </div>
                  {player.hasOneCardLeft &&
                    gameController.currentPlayerTurn.name === player.name &&
                    !player.calledLastCard && (
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={(): void => {
                          gameController.setCurrentInfoMessage(`${player.name} has only 1 card left!`);
                          gameController.nextTurn();
                          player.setCalledLastCard(true);
                        }}>
                        Last card
                      </Button>
                    )}
                </div>
                <div className="cardwrapper">
                  {player?.cards?.map((card): React.ReactElement => {
                    return (
                      <div
                        className="card card--player-card"
                        key={'player_' + card.suit + card.value}
                        onClick={(): void => {
                          gameController.playCard(player, card);
                        }}>
                        {gameController.currentPlayerTurn.name === player.name && (
                          <img width="100%" height="100%" src={`/assets/${card.value}_${card.suit}.png`} />
                        )}
                        {gameController.currentPlayerTurn.name !== player.name && (
                          <img width="100%" height="100%" src={`/assets/back_of_card.png`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="decks">
            <DrawPileCard
              className="card card--drawpile-card"
              onClick={(): void => {
                if (!gameController.currentPlayerhasPlayedCard && gameController.deck.numberOfCards > 0) {
                  gameController.draw(1);
                }
              }}>
              <div className="card__amount">{gameController.deck.numberOfCards}</div>
            </DrawPileCard>
            <div
              className="card card--discard-card"
              key={'discardpile_' + gameController.discardPile.topCard.suit + gameController.discardPile.topCard.value}>
              <img
                width="100%"
                height="100%"
                src={`/assets/${gameController.discardPile.topCard.value}_${gameController.discardPile.topCard.suit}.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DrawPileCard = styled.div`
  background: url('assets/back_of_card.png') no-repeat center center;
`;

export default observer(Board);
