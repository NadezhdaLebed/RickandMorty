import react from'react';
import { makeStyles } from '@material-ui/core';
import Navigation from '../../ui-kit/Navigation/Navigation';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Navigation />
        </header>
    );
    };

export default Header;