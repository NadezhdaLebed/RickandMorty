import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import { Location } from '../../interfaces/location';

interface Props {
    open: boolean;
    handleClose: MouseEventHandler;
    locationItem: Location | null;
}

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    contentBlock: {
        display: 'flex',
        alignItems: 'center',
    },
    leftBlock: {},
    mainText: {
        fontWeight: 600,
    },
    rightBlock: {},
    text: {
        marginLeft: '15px',
    },
});

const LocationModal: FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles();
    const { locationItem, handleClose, open } = props;

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Info about ${locationItem?.name} `}
        </DialogTitle>
        <DialogContent className={classes.wrapper}>
            <div className={classes.contentBlock}>
            <div className={classes.leftBlock}>
                <p className={classes.mainText}>Name:</p>
                <p className={classes.mainText}>Dimension:</p>
                <p className={classes.mainText}>Type:</p>
            </div>
            <div className={classes.rightBlock}>
                <p className={classes.text}>{locationItem?.name}</p>
                <p className={classes.text}>{locationItem?.dimension}</p>
                <p className={classes.text}>{locationItem?.type}</p>
            </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
};

export default LocationModal;