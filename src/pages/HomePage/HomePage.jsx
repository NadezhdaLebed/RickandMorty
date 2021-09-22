import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Welcome to home Page of Rick and Morty site.</h2>
    </div>
  );
};

export default HomePage;