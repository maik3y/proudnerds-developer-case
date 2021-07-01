import { Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useContext } from 'react';
import { GameControllerContext } from '../../stores/storesContext';
import { useSpring, animated } from 'react-spring';
import { observer } from 'mobx-react';
import './winner.scss';

const Winner = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);
  const fadeInAndOut = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: 'gold' },
      { opacity: 0, color: 'goldenrod' },
    ],
    from: { opacity: 0, color: 'yellow' },
  });

  return (
    <div className="winner">
      <Typography className="winner__text" component="h3" variant="h3" align="center" gutterBottom>
        <animated.div style={fadeInAndOut}>{gameController.getWinner()} is the winner!!</animated.div>
      </Typography>
      <div className="winner__actions">
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={(): void => {
            gameController.restart();
          }}>
          Play again?
        </Button>
      </div>
    </div>
  );
};

export default observer(Winner);
