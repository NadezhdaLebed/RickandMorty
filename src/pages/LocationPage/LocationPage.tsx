import React, { useEffect, useState, MouseEvent } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import LocationModal from '../../components/Modals/LocationModal';
import Layout from '../../components/Layout/Layout';
import { Info, Location } from '../../interfaces';

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
    id: 'dimension',
    label: 'Dimension',
  },
  {
    id: 'type',
    label: 'Type',
  }
];

const LocationPage = () => {
  const classes = useStyles();

  const [location, setLocation] = useState([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationItem, setLocationItem] = useState<null | Location>(null);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/location')
    .query({ page: page + 1 })
    .then(response => {
      const { info, results } = response.body;
      setLocation(results);
      setInfo(info);
    })
    .catch(error => {
      console.error(error)
    });
  }, [page]);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
    const foundLc = location.find((lc: any) => lc.id === id);

    
    if (foundLc) {
      setIsModalOpen(true);
      setLocationItem(foundLc);
    }
  };

 const handleClickClose = () => {
    setIsModalOpen(false);
 };

  return (
    <Layout>
      <div className={classes.container}>
        <h2 className={classes.title}>Location page</h2>
        <Table
          page={page}
          columns={columns}
          rows={location}
          count={info && info.count || 0}
          handleChangePage={handleChangePage}
          handleOpen={handleClickOpen}
        />
      </div>
      <LocationModal 
        locationItem={locationItem}
        open={isModalOpen}
        handleClose={handleClickClose}
      />
    </Layout>
  );
};

export default LocationPage;