import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import EpisodeModal from '../../components/Modals/EpisodeModal';

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

  const [episode, setEpisode] = useState([]);
  const [info, setInfo] = useState();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [episodeItem, setEpisodeItem] = useState(null);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/episode')
    .query({ page: page + 1 })
    .then(response => {
      const { results, info } = response.body;
      setEpisode(results);
      setInfo(info)
    })
    .catch(error => {
      console.error(error)
    });
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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

  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.title}>Episode page</h2>
      <Table
        page={page}
        columns={columns}
        rows={episode}
        count={info && info.count}
        handleChangePage={handleChangePage}
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