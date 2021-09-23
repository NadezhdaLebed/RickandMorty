import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
  },
});

global.theme = theme;

export default theme;