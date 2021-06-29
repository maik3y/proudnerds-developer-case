import { observer } from 'mobx-react';
import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { GameControllerContext, PlayerControllerContext } from '../../stores/storesContext';
import Deck from '../deck/deck';

const Board = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);
  const playerController = useContext(PlayerControllerContext);

  return <BoardWrapper></BoardWrapper>;
};

const BoardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: url('/background-board.jpg') no-repeat center center;
  background-size: cover;
`;

export default observer(Board);
