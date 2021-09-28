import React, { useEffect, useState, MouseEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Table from '../../components/Table/BasicTable';
import LocationModal from '../../components/Modals/LocationModal';
import Layout from '../../components/Layout/Layout';
import { Location } from '../../interfaces';
import { getLocationItems } from '../../redux/modules/location/locationActions';
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

  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationItem, setLocationItem] = useState<null | Location>(null);

  const dispatch = useDispatch();
  const locations = useSelector((state: IState) => state.locations.locations);
  const info = useSelector((state: IState) => state.locations.info);

  const getLocationsItems = useCallback(
    () => {
      dispatch(getLocationItems(page))
    },
    [dispatch, page],
  )

  useEffect(() => {
    getLocationsItems()
  }, [getLocationsItems]);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleClickOpen = (id: number) => {
    const foundLc = locations.find((lc: any) => lc.id === id);

    
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
          rows={locations}
          count={(info && info.count) || 0}
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