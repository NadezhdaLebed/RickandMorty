import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    borderBottom: '1px solid #00c8c8',
    paddingBottom: '5px',
    marginBottom: '20px',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Welcome to home Page of Rick and Morty site.</h2>
      <img src="/images/image.png" />
    </div>
  );
};

export default HomePage;