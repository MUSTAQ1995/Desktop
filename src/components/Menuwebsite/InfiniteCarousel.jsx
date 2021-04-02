import React from 'react';
import Slider from 'infinite-react-carousel';
import Cards from './Cards'


function InfiniteCarousel(){
  
    const settings =  {
      accessibility: false,
      centerMode: true,
      arrowsBlock: true,
      autoplay:true,
      autoplayScroll: 1,
      className: 'Musta',
      shift: 10,
      pauseOnHover: true,
      slidesToShow: 6,
      swipe: false,
      wheel: true,
    };
    return (
      <div>
        <Slider { ...settings }>
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
        </Slider>
      </div>
    );
}

export default InfiniteCarousel;