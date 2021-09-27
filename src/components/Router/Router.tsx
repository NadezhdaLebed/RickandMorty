import React, { FunctionComponent } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';

// Route imports
import HomePage from '../../pages/HomePage/HomePage';
import CharacterPage from '../../pages/CharacterPage/CharacterPage';
import EpisodePage from '../../pages/EpisodePage/EpisodePage';
import LocationPage from '../../pages/LocationPage/LocationPage';

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/character" component={CharacterPage} />
          <Route exact path="/location" component={LocationPage} />
          <Route exact path="/episode" component={EpisodePage} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;