import * as React from 'react';
import styled from 'styled-components';

interface BoardProps {
  players: {
    player1: string;
    player2: string;
    player3: string;
    player4: string;
  };
}

const Board = ({ players }: BoardProps): React.ReactElement => {
  const player1 = React.useState('');
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

export default Board;
