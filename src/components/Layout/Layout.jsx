import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    width: '80%',
    margin: '0 auto',
    display: 'inherit',
    flexDirection: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
  }
});


const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const Layout = (props) => {
  const { path, component } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.main}>
        <Route path={path} component={component} exact {...props} />
      </main>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;

export default Layout;