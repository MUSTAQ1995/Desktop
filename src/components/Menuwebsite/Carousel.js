import React from 'react'
import Cards from './Cards'
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  maindiv: {
      marginTop: "70px ",
  }
})
function CarouselCard() {
    const classes = useStyles();
    const breakPoints = [
        {width: 1, itemsToShow: 2},
        {width: 500, itemsToShow: 4},
        {width: 768, itemsToShow: 6},
        {width: 1200, itemsToShow: 8} 
    ]
    return (
        <div className={classes.maindiv}>
            <Carousel breakPoints={breakPoints}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
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
}

export default CarouselCard;
