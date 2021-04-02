import React from 'react';
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({ 
   details: {
       backgroundColor: "whitesmoke",
       borderRadius: "20px",
   },
   typography: {
       marginLeft: "10px",
   }
})

function Details() {
  const classes = useStyles();

    return (
        <div className={classes.details}>
            <div className={classes.typography}>
                <Typography
                    component="h5"
                    variant="body"
                >   Rakesh Jain
                </Typography>
                <Typography
                    component="h6"
                    variant="body"
                >   Senior App Developer
                </Typography>
                <Typography
                    component="h6"
                    variant="body"
                >   5+ Years
                </Typography>
                <Typography
                    component="h6"
                    variant="body"
                >   ReactJS,NodeJs,MongoDB,ExpressJS,Hybricx
                </Typography>
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                >
                    interview
                </Button>
            </div>
        </div>
    )
}

export default Details
