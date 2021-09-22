import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const CharacterPage = () => {
  const classes = useStyles();

  const [character, SetCharacter] = useState([]);
  const [page, setPage] = useState()

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/character').then(response => {
      SetCharacter(response.body.results);
    })
    .catch(error => {
      console.error(error)
    });
  }, [SetCharacter]);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/character').then(response => {
      setPage(response.body.info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [setPage]);

console.log(page, 'page');
console.log(character, 'character');

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Character page</h2>
    </div>
  );
};

export default CharacterPage;