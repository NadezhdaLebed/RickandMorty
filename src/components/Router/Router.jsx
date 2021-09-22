import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';

// Route imports
import HomePage from '../../pages/HomePage/HomePage';
import CharacterPage from '../../pages/CharacterPage/CharacterPage';
import EpisodePage from '../../pages/EpisodePage/EpisodePage';
import LocationPage from '../../pages/LocationPage/LocationPage';

const Router = () => {
  return (
    <Switch>
      <Layout exact path="/" component={HomePage} />
      <Layout path="/character" component={CharacterPage} />
      <Layout path="/location" component={LocationPage} />
      <Layout path="/episode" component={EpisodePage} />
    </Switch>
  );
};

export default Router;