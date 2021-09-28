import React, { useEffect, useState, FunctionComponent, MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import CharacterModal from '../../components/Modals/CharacterModal';
import Layout from '../../components/Layout/Layout';
import { Character } from '../../interfaces';
import { getCharacterItems } from '../../redux/modules/character/characterActions';
import { IState } from '../../redux/interfaces';

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

  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [charactersItem, setCharactersItem] = useState<null | Character>(null);

  const dispatch = useDispatch();
  const characters = useSelector((state: IState) => state.characters.characters);
  const info = useSelector((state: IState) => state.characters.info);

  const getCharactersItems = useCallback(
    () => {
      dispatch(getCharacterItems(page))

    },
    [dispatch, page],
  );

  useEffect(() => {
    getCharactersItems()
  }, [getCharactersItems]);

  const handleChangePage = ( event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
     const foundCh = characters.find((ch: any) => ch.id === id);

     
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
        rows={characters}
        count={(info && info.count) || 0}
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