import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
  },
});

global.theme = theme;

export default theme;