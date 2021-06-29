import * as React from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import './player-picker.scss';
import { gameControllerContext } from '../../stores/storesContext';
import { observer } from 'mobx-react';

interface FormValues {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
}

const PlayerPicker = (): React.ReactElement => {
  const gameController = React.useContext(gameControllerContext);
  const formik = useFormik({
    initialValues: { player1: '', player2: '', player3: '', player4: '' },
    onSubmit: (values: FormValues) => {
      // alert(JSON.stringify(values, null, 2));
      gameController.startGame();
    },
  });

  return (
    <PlayerPickerWrapper>
      <form className={'player-picker'} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <PlayerPickerHeader>
          <Typography component="h1" variant="h1" align="center" color="primary" gutterBottom>
            Mau Mau
          </Typography>
          <Typography component="h2" variant="subtitle1" align="center" color="textPrimary" gutterBottom>
            Enter player names to begin
          </Typography>
        </PlayerPickerHeader>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="player1"
          label="Player 1"
          name="player1"
          value={formik.values.player1}
          onChange={formik.handleChange}
          autoComplete="player1"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="player2"
          label="Player 2"
          name="player2"
          value={formik.values.player2}
          onChange={formik.handleChange}
          autoComplete="player2"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="player3"
          label="Player 3"
          name="player3"
          value={formik.values.player3}
          onChange={formik.handleChange}
          autoComplete="player3"
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="player4"
          label="Player 4"
          name="player4"
          value={formik.values.player4}
          onChange={formik.handleChange}
          autoComplete="player4"
        />
        <ButtonWrapper>
          <Button variant="contained">Random opponents</Button>
          <Button variant="contained" color="primary" type="submit">
            Start game
          </Button>
        </ButtonWrapper>
      </form>
    </PlayerPickerWrapper>
  );
};

export default observer(PlayerPicker);

const PlayerPickerHeader = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  color: white;
`;

const PlayerPickerWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: 400px;
  padding: 10px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 10px;
`;
