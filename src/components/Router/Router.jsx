import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';

// Route imports
import HomePage from '../../pages/HomePage/HomePage';
import CharacterPage from '../../pages/CharacterPage/CharacterPage';
import EpisodePage from '../../pages/EpisodePage/EpisodePage';
import LocationPage from '../../pages/LocationPage/LocationPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Layout exact path="/" component={HomePage} />
          <Layout exact path="/character" component={CharacterPage} />
          <Layout exact path="/location" component={LocationPage} />
          <Layout exact path="/episode" component={EpisodePage} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;