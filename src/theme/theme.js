import React from 'react'
import {
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles'

// Color customization
// https://material-ui.com/customization/color/
export const theme = createMuiTheme({
    overrides: {
        MUIDataTableBodyCell: {
            backgroundColor: 'red'
        }
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#1b5e20'
        },
        secondary: { main: '#03a9f4' },

        error: { main: '#ca0909' },

        sand: { main: '#F4DECB' },
        shell: { main: '#F8EEE7' },
        status: {
            danger: '#b71c1c'
        },
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    }
});

const appTheme = (props) => {
    return (
        <MuiThemeProvider theme={theme} >
            {props.children}
        </MuiThemeProvider >
    )
}

export default appTheme