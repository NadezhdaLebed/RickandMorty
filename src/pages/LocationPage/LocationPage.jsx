import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const LocationPage = () => {
  const classes = useStyles();

  const [location, SetLocation] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/location').then(response => {
      SetLocation(response.body.results);
    })
    .catch(error => {
      console.error(error)
    });
  }, [SetLocation]);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/episode').then(response => {
      setPage(response.body.info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [setPage]);

  console.log(location, 'location');
  console.log(page, 'episode');

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Location page</h2>
    </div>
  );
};

export default LocationPage;