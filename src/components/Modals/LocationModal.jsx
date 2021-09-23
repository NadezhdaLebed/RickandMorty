import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';

const propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    episodeItem: PropTypes.shape({}),
};

const defaultProps = {
    open: false,
    locationItem: null,
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

const LocationModal = (props) => {
    const classes = useStyles();
    const { locationItem, handleClose, open } = props;

    const {
        name = '',
        dimension = '',
        type = '',
    } = locationItem || {};

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
                <p className={classes.mainText}>Dimension:</p>
                <p className={classes.mainText}>Type:</p>
            </div>
            <div className={classes.rightBlock}>
                <p className={classes.text}>{name}</p>
                <p className={classes.text}>{dimension}</p>
                <p className={classes.text}>{type}</p>
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

LocationModal.propTypes = propTypes;
LocationModal.defaultProps = defaultProps;

export default LocationModal;