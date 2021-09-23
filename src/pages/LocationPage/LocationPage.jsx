import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import LocationModal from '../../components/Modals/LocationModal';

const useStyles = makeStyles({});

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

  const [location, SetLocation] = useState([]);
  const [info, setInfo] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [open, setOpen] = useState(false);
  const [locationItem, setLocationItem] = useState(null);

  useEffect(() => {
    superagent.get('https://rickandmortyapi.com/api/location').then(response => {
      SetLocation(response.body.results);
    })
    .catch(error => {
      console.error(error)
    });
  }, [SetLocation]);

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
    const foundCh = location.find((lc) => lc.id === id);

    
    if (foundCh) {
      setOpen(true);
      setLocationItem(foundCh);
    }
  };

 const handleClickClose = () => {
   setOpen(false);
   setLocationItem(null);
 };

 console.log(location, 'location');
 console.log(info, 'info');

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Location page</h2>
        <Table
          page={page}
          columns={columns}
          rowsPerPage={rowsPerPage}
          rows={location}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleOpen={handleClickOpen}
        />
      </div>
      <LocationModal 
        locationItem={locationItem}
        open={open}
        handleClose={handleClickClose}
      />
    </>
  );
};

export default LocationPage;