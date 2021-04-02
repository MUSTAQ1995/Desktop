import React from 'react';
import Cards from'./Card';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
 gridContainer :{
  
 }
});

export default function NewsCards() {
  const classes = useStyles();
 return(
  
   <Grid container   className={classes.gridContainer}>
     <Grid items xs={6} >
        <Cards/>
     </Grid>
     <Grid items xs={6}>
        <Cards/>
     </Grid>
     <Grid items xs={6} >
        <Cards/>
     </Grid> 
     <Grid items xs={6} >
        <Cards/>
     </Grid>
     <Grid items xs={6} >
        <Cards/>
     </Grid>
     <Grid items xs={6} >
        <Cards/>
     </Grid>
    <Grid items xs={12} sm={6} md={3}>
        <Cards/>
     </Grid> 
     <Grid items xs={12} sm={6} md={3}>
        <Cards/>
     </Grid> 
     
   </Grid>
   
 )

}
