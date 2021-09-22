import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const CharacterPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Character page</h2>
    </div>
  );
};

export default CharacterPage;