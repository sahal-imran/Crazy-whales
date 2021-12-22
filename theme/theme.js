import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        // values: {
        //     xs: 0,
        //     sm: 320,
        //     md: 480,
        //     lg: 768,
        //     xl: 1080,
        //     'xxl': 1200,
        // }
    },
    palette: {
        // primary: {
        //     main: '#000000',
        // },
        // secondary: {
        //     main: '#747572',
        // },
        // error: {
        //     main: '#e5e5e5',
        // },
        // grey: {
        //     main: '#262022'
        // }
    },
    typography: {
        // h1: {
        //     fontSize: '5rem',
        // }
    }
});

export default theme;