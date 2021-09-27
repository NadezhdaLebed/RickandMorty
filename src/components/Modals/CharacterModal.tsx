import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import { Character } from '../../interfaces/character';

interface Props {
    open: boolean;
    handleClose: MouseEventHandler;
    charactersItem: Character | null;
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
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginLeft: '15px',
    }
});

const CharacterModal: FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles();
    const { charactersItem, handleClose, open } = props;

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Info about ${charactersItem && charactersItem.name} `}
        </DialogTitle>
        <DialogContent className={classes.wrapper}>
            <div className={classes.contentBlock}>
            <div className={classes.leftBlock}>
                <p className={classes.mainText}>Name:</p>
                <p className={classes.mainText}>Gender:</p>
                <p className={classes.mainText}>Species:</p>
                <p className={classes.mainText}>Status:</p>
            </div>
            <div className={classes.rightBlock}>
                <p className={classes.text}>{charactersItem && charactersItem.name}</p>
                <p className={classes.text}>{charactersItem && charactersItem.gender}</p>
                <p className={classes.text}>{charactersItem && charactersItem.species}</p>
                <p className={classes.text}>{charactersItem && charactersItem.species}</p>
            </div>
            </div>
            <img className={classes.image} src={charactersItem && charactersItem.image || undefined} alt={charactersItem && charactersItem.name || undefined} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
};

export default CharacterModal;