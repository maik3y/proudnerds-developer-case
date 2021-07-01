import React from 'react';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import './player-picker.scss';
import { GameControllerContext, PlayerControllerContext } from '../../stores/storesContext';
import { observer } from 'mobx-react';
import { useContext } from 'react';

interface FormValues {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
}

const validationSchema = Yup.object().shape({
  player1: Yup.string().min(2, 'Too Short!').max(12, 'Too Long!').required('Required'),
  player2: Yup.string().min(2, 'Too Short!').max(12, 'Too Long!').required('Required'),
  player3: Yup.string().min(2, 'Too Short!').max(12, 'Too Long!').required('Required'),
  player4: Yup.string().min(2, 'Too Short!').max(12, 'Too Long!').required('Required'),
});

const PlayerPicker = (): React.ReactElement => {
  const gameController = useContext(GameControllerContext);
  const playerController = useContext(PlayerControllerContext);

  return (
    <div className="playerpicker">
      <Formik
        initialValues={{ player1: '', player2: '', player3: '', player4: '' }}
        validationSchema={validationSchema}
        validateOnBlur={true}
        onSubmit={(values: FormValues) => {
          playerController.newPlayer(values.player1);
          playerController.newPlayer(values.player2);
          playerController.newPlayer(values.player3);
          playerController.newPlayer(values.player4);
          gameController.startGame();
        }}>
        {(formik): React.ReactElement => (
          <form className="playerpicker__wrapper" noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="playerpicker__header">
              <Typography component="h1" variant="h1" align="center" color="primary" gutterBottom>
                Mau Mau
              </Typography>
              <Typography component="h2" variant="subtitle1" align="center" color="textPrimary" gutterBottom>
                Enter player names to begin
              </Typography>
            </div>
            <TextField
              variant="outlined"
              error={formik.errors.player1 && formik.touched.player1 ? true : false}
              margin="dense"
              required
              fullWidth
              id="player1"
              label="Player 1"
              name="player1"
              value={formik.values.player1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="player1"
              autoFocus
              helperText={formik.errors.player1 && formik.touched.player1 ? formik.errors.player1.toString() : null}
            />
            <TextField
              variant="outlined"
              error={formik.errors.player2 && formik.touched.player2 ? true : false}
              margin="dense"
              required
              fullWidth
              id="player2"
              label="Player 2"
              name="player2"
              value={formik.values.player2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="player2"
              helperText={formik.errors.player2 && formik.touched.player2 ? formik.errors.player2.toString() : null}
            />

            <TextField
              variant="outlined"
              error={formik.errors.player3 && formik.touched.player3 ? true : false}
              margin="dense"
              required
              fullWidth
              id="player3"
              label="Player 3"
              name="player3"
              value={formik.values.player3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="player3"
              helperText={formik.errors.player3 && formik.touched.player3 ? formik.errors.player3.toString() : null}
            />
            <TextField
              variant="outlined"
              error={formik.errors.player4 && formik.touched.player4 ? true : false}
              margin="dense"
              required
              fullWidth
              id="player4"
              label="Player 4"
              name="player4"
              value={formik.values.player4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="player4"
              helperText={formik.errors.player4 && formik.touched.player4 ? formik.errors.player4.toString() : null}
            />
            <div className="playerpicker__actions">
              <Button variant="contained" color="primary" type="submit">
                Start game
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default observer(PlayerPicker);
