import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from './Cards'

function MultiCarousel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1500, min: 1200 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 1200, min: 801 },
          items: 6
        },
     
        tablet: {
          breakpoint: { max: 800, min: 401 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 400, min: 0 },
          items: 2
        }
      };
    return (
        <div>
            <Carousel responsive={responsive}>
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
            </Carousel>;
        </div>
    )
}

export default MultiCarousel
