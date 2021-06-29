import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import { gameControllerContext, initGlobals } from './stores/storesContext';
import Board from './components/board/board';
import PlayerPicker from './components/player-picker/player-picker';
import theme from './styles/theme';

const App: React.FC = (): React.ReactElement => {
  initGlobals();
  const gameController = React.useContext(gameControllerContext);

  const background = gameController.gameStarted ? '/background-board.jpg' : '/background-playerpicker.jpg';
  const BackgroundWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: url(${background}) no-repeat center center;
    background-size: cover;
  `;

  React.useEffect(() => {
    // Re-render if gamestarted changes
    alert('re-render');
  }, [gameController.gameStarted]);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrapper>
        {gameController.gameStarted && <Board />}
        {!gameController.gameStarted && <PlayerPicker />}
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default observer(App);
