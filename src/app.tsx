import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import theme from './styles/theme';
import AppWrapper from './app-wrapper';

const App: React.FC = (): React.ReactElement => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppWrapper />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default observer(App);
