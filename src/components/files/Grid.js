import React from 'react';
import { Grid }  from "@material-ui/core";
import MaterialCard from "./MaterialCard";

function Girid() {
    return (
        <Grid conatainer >
            <Grid item xs={6} >
                <MaterialCard />
            </Grid>
            <Grid item xs={6} >
                <MaterialCard />
            </Grid>
            <Grid item xs={6} >
                <MaterialCard />
            </Grid>
            <Grid item xs={6} >
                <MaterialCard />
            </Grid>
            
            
        </Grid>
    )
}

export default Girid
