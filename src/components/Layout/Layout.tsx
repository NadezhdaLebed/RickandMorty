import React, { FunctionComponent, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  children?: ReactNode;
};

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

const Layout: FunctionComponent = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.main}>
        {children}
      </main>
    </React.Fragment>
  );
};


export default Layout;