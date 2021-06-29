import * as React from 'react';
import styled from 'styled-components';
import PlayerPicker from './components/player-picker/player-picker';
import Board from './components/board/board';
import theme from './styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { gameControllerContext } from './stores/storesContext';

export default function App() {
  const gameController = React.useContext(gameControllerContext);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        {!gameController.gameStarted ? <PlayerPicker /> : <Board/>}
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: url('/background-playerpicker.jpg') no-repeat center center;
  background-size: cover;
`;
