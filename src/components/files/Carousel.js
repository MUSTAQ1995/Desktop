import React,{useState} from 'react'
import Arrow from './Arrow';
import background from './background.png';
import '../App.css'

function Carousel() {
    let sliderArr = [
    <Arrow src={background} />, 
    <Arrow src={background} />,
    <Arrow src={background} />, 
    <Arrow src={background} />, 
    <Arrow src={background} />
];
    const [x, setX] = useState(0);
    const goLeft = () => {
         x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    };
    const goRight = () => {
        x === -100 * (sliderArr.length-1) ? setX(0) : setX(x - 100)
    };
    return (
        <div className="slider">
           {
                sliderArr.map((item, index) => {
                   return(
                       <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                           {item}
                       </div>
                   )
               })
           }
          <button id= "goleft" onClick={goLeft} >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>;
          <button id= "goright" onClick={goRight} >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>;  
        </div>
    )
}

export default Carousel;
