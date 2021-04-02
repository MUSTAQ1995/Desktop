import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

function Copyright(){
    return (
        <Typography variant="body2" color="#ffffff" align="center">
            { "Copyright @  Zenrays.Pvt.Ltd Ind" }
        </Typography>
    );
};

const useStyles = makeStyles({
    footer:{
        backgroundColor: "blue",
        width: "fullWidth",
        marginTop: "5px",
    }
})

function Footer() {
    const classes = useStyles()
    return (
      <footer className={classes.footer}>
        <Copyright />
      </footer>
        
    );
}

export default Footer;
