import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const Layout = (props) => {
  const { path, component } = props;

  return (
    <React.Fragment>
      <main>
        <Route path={path} component={component} exact {...props} />
      </main>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;

export default Layout;