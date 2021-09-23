import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import EpisodeModal from '../../components/Modals/EpisodeModal';

const useStyles = makeStyles({});

const columns = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'episode',
    label: 'Episode',
  },
  {
    id: 'air_date',
    label: 'Air date',
  }
];

const EpisodePage = () => {
  const classes = useStyles();

  const [episode, SetEpisode] = useState([]);
  const [info, setInfo] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [open, setOpen] = useState(false);
  const [episodeItem, setEpisodeItem] = useState(null);

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
    const foundCh = episode.find((ch) => ch.id === id);

    
    if (foundCh) {
      setOpen(true);
      setEpisodeItem(foundCh);
    }
  };

 const handleClickClose = () => {
   setOpen(false);
   setEpisodeItem(null);
 };

  console.log(episode, 'episode');
  console.log(info, 'info');

  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.title}>Episode page</h2>
      <Table
        page={page}
        columns={columns}
        rowsPerPage={rowsPerPage}
        rows={episode}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleOpen={handleClickOpen}
      />
    </div>
    <EpisodeModal
      open={open}
      handleClose={handleClickClose}
      episodeItem={episodeItem}
    />
    </>
  );
};

export default EpisodePage;