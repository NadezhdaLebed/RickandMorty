import React, { useEffect, useState, FunctionComponent, MouseEvent } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import EpisodeModal from '../../components/Modals/EpisodeModal';
import Layout from '../../components/Layout/Layout';
import { Info, Episode } from '../../interfaces';

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
    id: 'episode',
    label: 'Episode',
  },
  {
    id: 'air_date',
    label: 'Air date',
  }
];

const EpisodePage: FunctionComponent = () => {
  const classes = useStyles();

  const [episode, setEpisode] = useState([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [episodeItem, setEpisodeItem] = useState<null | Episode>(null);

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

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
    const foundEp = episode.find((ep: any) => ep.id === id);

    
    if (foundEp) {
      setIsModalOpen(true);
      setEpisodeItem(foundEp);
    }
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
    <div className={classes.container}>
      <h2 className={classes.title}>Episode page</h2>
      <Table
        page={page}
        columns={columns}
        rows={episode}
        count={info && info.count || 0}
        handleChangePage={handleChangePage}
        handleOpen={handleClickOpen}
      />
    </div>
    <EpisodeModal
      open={isModalOpen}
      handleClose={handleClickClose}
      episodeItem={episodeItem}
    />
    </Layout>
  );
};

export default EpisodePage;