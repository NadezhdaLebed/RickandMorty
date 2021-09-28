import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import RouterComponent from './components/Router/Router';
import history from './history';
import theme from './theme';
import store from '../src/redux/store';

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterComponent />
        </Provider>
      </ThemeProvider>
    </Router>
);

};

export default App;
