import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const EpisodePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Episode page</h2>
    </div>
  );
};

export default EpisodePage;