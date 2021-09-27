import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import { Episode } from '../../interfaces/episode';

interface Props {
    open: boolean;
    handleClose: MouseEventHandler;
    episodeItem: Episode | null;
};

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

const EpisodeModal: FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles();
    const { episodeItem, handleClose, open } = props;

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Info about ${episodeItem && episodeItem.name} `}
        </DialogTitle>
        <DialogContent className={classes.wrapper}>
            <div className={classes.contentBlock}>
            <div className={classes.leftBlock}>
                <p className={classes.mainText}>Name:</p>
                <p className={classes.mainText}>Episode:</p>
                <p className={classes.mainText}>Air date:</p>
            </div>
            <div className={classes.rightBlock}>
                <p className={classes.text}>{episodeItem && episodeItem.name}</p>
                <p className={classes.text}>{episodeItem && episodeItem.episode}</p>
                <p className={classes.text}>{episodeItem && episodeItem.air_date}</p>
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

export default EpisodeModal;