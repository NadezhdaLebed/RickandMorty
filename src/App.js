import React from 'react';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import RouterComponent from './components/Router/Router';
import history from './history';
import theme from './theme';

const App = () => {
  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <RouterComponent />
      </MuiThemeProvider>
    </Router>
);

};

export default App;

