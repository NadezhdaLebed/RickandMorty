import React, { useEffect, useState, FunctionComponent, MouseEvent } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import CharacterModal from '../../components/Modals/CharacterModal';
import Layout from '../../components/Layout/Layout';
import { Info, Character } from '../../interfaces';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
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

const CharacterPage: FunctionComponent = () => {
  const classes = useStyles();

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [charactersItem, setCharactersItem] = useState<null | Character>(null);

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

  const handleChangePage = ( event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
     const foundCh = character.find((ch: any) => ch.id === id);

     
     if (foundCh) {
      setIsModalOpen(true);
      setCharactersItem(foundCh);
     }
   };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
    <div className={classes.container}>
      <h2 className={classes.title}>Character page</h2>
      <Table
        page={page}
        columns={columns}
        rows={character}
        count={info && info.count || 0}
        handleChangePage={handleChangePage}
        handleOpen={handleClickOpen}
      />
    </div>
      <CharacterModal 
        charactersItem={charactersItem}
        open={isModalOpen}
        handleClose={handleClickClose}
      />
  </Layout>        
  );
};

export default CharacterPage;