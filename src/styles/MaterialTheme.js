import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

export default createMuiTheme({

    palette: {
        primary: { main: colors.primary, contrastText: '#fff' },
        secondary: { main: colors.secondary, contrastText: '#fff', },
        text: {
            secondary: "rgba(0, 0, 0, 0.75)"
        }
    },

    typography: {
        h5: { color: colors.primary },
        subtitle1: { color: colors.primary }
    },


});
