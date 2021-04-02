import React from 'react';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();

theme = responsiveFontSizes(theme)

function MuiText() {
    return (
        <div>
             <ThemeProvider theme={theme}>
      <Typography variant="h5">Responsive h3 we are here to check the responsiveeness of the text </Typography>
    </ThemeProvider>
        </div>
    )
}

export default MuiText
