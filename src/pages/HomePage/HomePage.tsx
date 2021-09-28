import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../../components/Layout/Layout';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    borderBottom: '1px solid #00c8c8',
    paddingBottom: '5px',
    marginBottom: '20px',
  },
});

const HomePage: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
    <div className={classes.container}>
      <h2 className={classes.title}>Welcome to home Page of Rick and Morty site.</h2>
      <img src="/images/image.png" alt="logo" />
    </div>
    </Layout>
  );
};

export default HomePage;