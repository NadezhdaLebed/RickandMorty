import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import CharacterModal from '../../components/Modals/CharacterModal';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    borderBottom: '1px solid #00c8c8',
    paddingBottom: '5px',
    marginBottom: '20px',
  },
});

const columns = [
    { 
    id: 'name',
    label: 'Name',
    },
    { 
      id: 'gender',
      label: 'Gender',
      },
    {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'species',
    label: 'Species'
  }
];

const CharacterPage = () => {
  const classes = useStyles();

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState();
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [charactersItem, setCharactersItem] = useState(null);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/character')
    .query({ page: page + 1 })
    .then(response => {
      const { results, info } = response.body;
      setCharacter(results);
      setInfo(info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (id) => {
     const foundCh = character.find((ch) => ch.id === id);

     
     if (foundCh) {
      setIsModalOpen(true);
      setCharactersItem(foundCh);
     }
   };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.title}>Character page</h2>
      <Table
        page={page}
        columns={columns}
        rows={character}
        count={info && info.count}
        handleChangePage={handleChangePage}
        handleOpen={handleClickOpen}
      />
    </div>
      <CharacterModal 
        charactersItem={charactersItem}
        open={isModalOpen}
        handleClose={handleClickClose}
      />
  </>        
  );
};

export default CharacterPage;