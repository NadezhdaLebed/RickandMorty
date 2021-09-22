import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const EpisodePage = () => {
  const classes = useStyles();

  const [episode, SetEpisode] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/episode').then(response => {
      SetEpisode(response.body.results);
    })
    .catch(error => {
      console.error(error)
    });
  }, [SetEpisode]);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/episode').then(response => {
      setPage(response.body.info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [setPage]);

  console.log(episode, 'episode');
  console.log(page, 'episode');

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Episode page</h2>
    </div>
  );
};

export default EpisodePage;