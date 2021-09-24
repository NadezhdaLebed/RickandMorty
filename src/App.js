import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import RouterComponent from './components/Router/Router';
import history from './history';
import theme from './theme';

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <RouterComponent />
      </ThemeProvider>
    </Router>
);

};

export default App;

