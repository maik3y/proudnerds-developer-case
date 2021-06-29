import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { GameControllerContext } from './stores/storesContext';
import Board from './components/board/board';
import PlayerPicker from './components/player-picker/player-picker';
import { useContext } from 'react';

const AppWrapper: React.FC = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);

  const background = gameController.gameStarted ? '/background-board.jpg' : '/background-playerpicker.jpg';
  const BackgroundWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: url(${background}) no-repeat center center;
    background-size: cover;
  `;

  return (
    <BackgroundWrapper>
      {!gameController.gameStarted && <PlayerPicker />}
      {gameController.gameStarted && <Board />}
    </BackgroundWrapper>
  );
};

export default observer(AppWrapper);
