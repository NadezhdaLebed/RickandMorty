import React, { useEffect, useState, FunctionComponent, MouseEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import EpisodeModal from '../../components/Modals/EpisodeModal';
import Layout from '../../components/Layout/Layout';
import { Episode } from '../../interfaces';
import { getEpisodeItems } from '../../redux/modules/episode/episodeActions';
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

  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [episodeItem, setEpisodeItem] = useState<null | Episode>(null);

  const dispatch = useDispatch();
  const episodes = useSelector((state: IState) => state.episodes.episodes);
  const info = useSelector((state: IState) => state.episodes.info);

  const getEpisodesItems = useCallback(
    () => {
      dispatch(getEpisodeItems(page))
    },
    [dispatch, page],
  );

  useEffect(() => {
    getEpisodesItems();
  }, [getEpisodesItems]);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
    const foundEp = episodes.find((ep: any) => ep.id === id);

    
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
        rows={episodes}
        count={(info && info.count) || 0}
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