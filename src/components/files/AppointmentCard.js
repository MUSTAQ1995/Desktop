import React from 'react';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import mapimage from './map.png'

function AppointmentCard({ name, category, id }) {
    const useStyles = makeStyles((theme) => ({
         card: {
             margin:"15px",
             borderRadius:"15px",
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
             padding: "10px",
             marginTop: "10px",
             borderRadius: "10px",
             paddingLeft: "10px",
             paddingRight: "10px",
             "&:hover": {
                 opacity: "0.9"
             },
         },
    }));
    const classes = useStyles();
    return (
        <Grid container direction= "row" justify="center" >
            <Card className={classes.card} elevation={3} >
                <Grid container justify="center" style={{ margin: "0px 5px 0px 5px"}}>
                    <Grid item sm={6} xs={12}>
                        <CardMedia 
                          className={classes.CardMedia}
                          image={mapimage}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} >
                       <Typography
                       style={{
                           fontSize:"22px",
                           fontWeight:"500",
                           marginTop:"15px",
                           textAlign: "left",
                           padding: "5px",
                       }}>
                       Hello Brother
                       </Typography>
                       <Typography
                         style={{
                             textAlign: "left",
                             marginBottom: "10px",
                             padding: "5px",
                         }}>
                             Hair Care | Dental Care
                         </Typography>
                    </Grid>
                </Grid>
                <CardContent className={classes.CardContent}>
                   <Grid container>
                       <Grid item sm={6} xs={12}>
                           <Typography style={{ textAlign: "left" }}>
                               Consultation Fee starts from 
                               < span style={{ color: "#595952", fontWeight: "bold"}}>
                                   {" "}
                                   Rs. 400
                               </span>
                           </Typography>
                           <Typography style={{ textAlign: "left"}}>
                               You are 
                               < span style={{ color: "#91469B"}}> 2.3 Km</span>
                               Away
                           </Typography>
                       </Grid>
                       <Grid item container justify={ "center"} sm={6} xs={12}>
                           <Button
                             size="large"
                             variant="contained"
                             disableElevation
                             className={classes.button}
                            >
                                <Typography variant={"body2"} style={{ color: "#93449B"}}>
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

export default AppointmentCard;
