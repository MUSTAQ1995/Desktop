import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    makeStyles,
    Button,
    CardActions,
} from "@material-ui/core";
import mapimage from '../img/mapimage.png';

const useStyles = makeStyles({
      root: {
        margin: "15px",
        borderRadius: "15px",
        cursor: "pointer",
      },
      CardMedia: {
        marginLeft:"auto",
        marginRight:"auto",
        margin:"10px",
        padding:"10px",
        height:"150px",
        borderRadius:"10px",
        marginBottom: "0px",
      },
      
      CardContent: {
          padding: "10px",
          backgroundColor: '#F0E2F0',
      },
      button: {
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          "&:hover": {
            opacity: "0.9",        
          }
        }
    })

function ClinicCard() {
  const classes= useStyles();

    return (
       <Grid container direction= "row" justify="center" >
            <Card className={classes.root} elevation={5}>
                <Grid container justify="center" style={{ margin: "0px 5px 0px 5px"}}>
                    <Grid item sm={6} xs={12}>
                        <CardMedia
                            className={classes.CardMedia}
                            image={mapimage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}> 
                    <Typography
                        style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        marginTop: "15px",
                        textAlign: "left",
                        padding: "5px",
                        }}>
                            Hey There
                    </Typography>
                    <Typography
                    style={{
                        textAlign: "left",
                        marginBottom: "10px",
                        padding: "5px"
                    }}>
                        Hair care | Dental care
                    </Typography>
                    </Grid>
                </Grid>
                <CardContent className={classes.CardContent}>
                    <Grid container>
                        <Grid item sm={6} xs={12} >
                            <Typography style={{ textAlign: "left" }}>
                                Consultation Fee starts from 
                                <span style={{color: "#91469B", fontWeight: "bold"}}>
                                 {" "}
                                  Rs. 400
                                </span>
                            </Typography>
                            <Typography style={{ textAlign: "left"}}>
                                You are 
                                <span style={{ color: "#91469B"}}> 5.00Km </span>
                                Away.
                            </Typography>
                        </Grid>
                        <Grid item container justify={"center"} sm={6} xs={12}>
                            <Button 
                                size="large"
                                variant="contained"
                                disableElevation
                                className={classes.button}>
                                    <Typography variant={"body2"} style={{color:"#93449B"}}>
                                        BOOK AN APPOINTMENT
                                    </Typography>
                                </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ClinicCard
