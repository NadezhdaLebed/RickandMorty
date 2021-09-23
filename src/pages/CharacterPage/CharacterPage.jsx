import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import CharacterModal from '../../components/Modals/CharacterModal';

const useStyles = makeStyles({});

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

  const [character, SetCharacter] = useState([]);
  const [info, setInfo] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [open, setOpen] = useState(false);
  const [charactersItem, setCharactersItem] = useState(null);

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
      setInfo(response.body.info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [setInfo]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = (id) => {
     const foundCh = character.find((ch) => ch.id === id);

     
     if (foundCh) {
       setOpen(true);
       setCharactersItem(foundCh);
     }
   };

  const handleClickClose = () => {
    setOpen(false);
    setCharactersItem(null);
  };

  console.log(info, 'info');
  console.log(character, 'character');

  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.title}>Character page</h2>
      <Table
        page={page}
        columns={columns}
        rowsPerPage={rowsPerPage}
        rows={character}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleOpen={handleClickOpen}
      />
    </div>
      <CharacterModal 
        charactersItem={charactersItem}
        open={open}
        handleClose={handleClickClose}
      />
  </>        
  );
};

export default CharacterPage;