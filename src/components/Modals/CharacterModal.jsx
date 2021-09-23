import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';

const propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    charactersItem: PropTypes.shape({}),
};

const defaultProps = {
    open: false,
    charactersItem: null,
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
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginLeft: '15px',
    }
});

const CharacterModal = (props) => {
    const classes = useStyles();
    const { charactersItem, handleClose, open } = props;

    const {
        name = '',
        image = '',
        gender = '',
        species = '',
    } = charactersItem || {};

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Info about ${name} `}
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
                <p className={classes.text}>{name}</p>
                <p className={classes.text}>{gender}</p>
                <p className={classes.text}>{species}</p>
                <p className={classes.text}>{species}</p>
            </div>
            </div>
            <img className={classes.image} src={image} alt={name} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
};

CharacterModal.propTypes = propTypes;
CharacterModal.defaultProps = defaultProps;

export default CharacterModal;