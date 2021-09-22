import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Home page</h2>
    </div>
  );
};

export default HomePage;