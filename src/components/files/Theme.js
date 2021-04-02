import React from 'react';
import "fontsource-roboto";
import CssBaseline from  "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  customButton: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba( 255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
  }
})

function Theme() {
    const classes = useStyles();
    return (
        <div className="theme">
            <Button variant="contained">Default</Button>
            <Button className={classes.customButton}>Custom</Button>
        </div>
    )
}

export default Theme;

