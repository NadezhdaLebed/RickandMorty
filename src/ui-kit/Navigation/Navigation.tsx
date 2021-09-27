import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
    },
    item: {
        padding: '10px',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    activeLink: {
        color: '#00c8c8',
    },
});

const Navigation: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <NavLink
                    exact 
                    to="/"
                    activeClassName={classes.activeLink}
                    className={classes.link}
                >
                Home
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink
                    exact 
                    to="/character"
                    activeClassName={classes.activeLink}
                    className={classes.link}
                >
                Character
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink
                    exact 
                    to="/location"
                    activeClassName={classes.activeLink}
                    className={classes.link}
                >
                Location
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink
                    exact 
                    to="/episode"
                    activeClassName={classes.activeLink}
                    className={classes.link}
                >
                Episode
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;