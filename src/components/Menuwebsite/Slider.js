import React from 'react';
import Carousel from  "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./Cards";
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';


const useStyles = makeStyles({
    slide: {
      marginTop:50,
      height: "175px",
    }
});

const breakpoints = [
    { width: 500, itemToshow: 1 },
    { width: 750, itemToshow: 2 },
    { width: 1200, itemToshow: 3 },
    { width: 1500, itemToshow: 4 },

]

function Slider() {
    const classes = useStyles();
    return (
        <div className={classes.slide}>
            <AutoRotatingCarousel>
            <Cards/>
            <Cards/>
            <Cards/>   
            </AutoRotatingCarousel>
            <Carousel breakPoints={breakpoints}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            </Carousel>
        </div>
    )
};

export default Slider
