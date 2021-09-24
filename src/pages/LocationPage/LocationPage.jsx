import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import LocationModal from '../../components/Modals/LocationModal';

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
  const [info, setInfo] = useState();
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationItem, setLocationItem] = useState(null);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (id) => {
    const foundLc = location.find((lc) => lc.id === id);

    
    if (foundLc) {
      setIsModalOpen(true);
      setLocationItem(foundLc);
    }
  };

 const handleClickClose = () => {
    setIsModalOpen(false);
 };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Location page</h2>
        <Table
          page={page}
          columns={columns}
          rows={location}
          count={info && info.count}
          handleChangePage={handleChangePage}
          handleOpen={handleClickOpen}
        />
      </div>
      <LocationModal 
        locationItem={locationItem}
        open={isModalOpen}
        handleClose={handleClickClose}
      />
    </>
  );
};

export default LocationPage;