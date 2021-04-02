import React from 'react';
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import AppointmentCard from './AppointmentCard';


function CardCarousel() {
    const useStyles = makeStyles((theme) => ({
        container: {
            maxHeight: "55vh",
            display: "grid",
            overflow: "auto",
            paddingBottom: "50px",
            marginTop: "30px",
        },
    }));
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item lg={6} md={8}>
            <Container maxwidth="md" className={classes.container}>
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
            </Container>
            </Grid>
        </Grid>
    )
}

export default CardCarousel
