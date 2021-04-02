import React from 'react';
import {
    Typography,
    Grid,
} from "@material-ui/core";
import  {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
   gridcontainer: {
       height:300,
       marginTop:"20",
       color: "white",
       marginBottom: "16",
       backgroundImage:"url(https://source.unsplash.com/17_tB-oI0ao/6016x4016)",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
   },
   griditem: {
       position: "relative",
       padding: "12",
       [theme.breakpoints.up("md")]: {
           padding: theme.spacing(6),
           paddingRight:0,
       },
   },
}))
function Adventure() {
    const classes = useStyles()
    return (
        <Grid container className={classes.gridcontainer}>
            <Grid item className={classes.griditem}>
              <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                 Travelling is the Globe is waste of Money
              </Typography>
              <Typography variant="body1" color="inherit" paragraph>
                 Join my adventures through my travel reports where i share my
                experiences through pictures and well documented posts.
              </Typography>
            </Grid>
        </Grid>
    )
}

export default Adventure;
