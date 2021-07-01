import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { GameControllerContext } from './stores/storesContext';
import Board from './components/board/board';
import PlayerPicker from './components/player-picker/player-picker';
import Winner from './components/winner/winner';
import { useContext } from 'react';
import theme from './styles/theme';
import { ThemeProvider } from '@material-ui/core';

const App: React.FC = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);

  const background = gameController.gameStarted
    ? '/assets/background-board.jpg'
    : '/assets//background-playerpicker.jpg';
  const BackgroundWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: url(${background}) no-repeat center center;
    background-size: cover;
  `;

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BackgroundWrapper>
          {!gameController.gameStarted && <PlayerPicker />}
          {gameController.gameStarted && <Board />}
        </BackgroundWrapper>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default observer(App);
