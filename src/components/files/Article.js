import React, {createRef} from 'react';
import './Articles.css';
import {Link} from 'react-router-dom';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Cards from "../Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsPage from './CardsPage';
import Slider from "react-slick";
import {
    Box,
    Grid,  
    Typography,  
    IconButton,    
    Radio,
    RadioGroup,
    FormControlLabel
  } from "@material-ui/core";

  const settings_small = {
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
function Article() {
    const customSlider_two = createRef();
    const customSlider_three = createRef();

    function next(item) {
        item.current.slickNext();
    }

    function prev(item) {
        item.current.slickPrev();
    }

    return (
        <div class="mainbody">
            <div class="headline">
                <Grid
                    container
                    direction={"row"}
                    justify={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    spacing={"4"}
                    alignContent={"center"}
                    margin-top={"20px"}
                    style={{ margin: "30px 0px 0px 0px", maxWidth: "90vw" }}
                >
                    <Grid item xs={12}     >               
                        <Typography variant="h3">TRENDINGS</Typography>
                    </Grid>

                    
                    <Grid item   >
                      <Link style={{color:"#e05297"}} to="/doctor/dashboard/articles">  
                        <Typography variant="h6" > ARTICLES</Typography>
                      </Link>  
                    </Grid>
                    <Grid item  >
                      <Link style={{color:"#e05297"}} to="/doctor/dashboard/webinar">
                        <Typography variant="h6"> WEBINARS</Typography>
                      </Link>
                    </Grid>
                    <Grid item  >
                      <Link style={{color:"#e05297"}} to="/doctor/dashboard/events&news"> 
                        <Typography variant="h6"> EVENTS & NEWS</Typography>
                      </Link>
                    </Grid>
                    <div className="Grid_icon">  
                        <Grid item >
                            <IconButton
                                aria-label="previous"
                                onClick={() => prev(customSlider_two)}
                            >
                                <ChevronLeftIcon
                                fontSize={"large"}
                                style={{ border: "1px solid black", borderRadius: "50%" }}
                                />
                            </IconButton>
                            <IconButton aria-label="next" onClick={() => next(customSlider_two)}>
                                <ChevronRightIcon
                                fontSize={"large"}
                                style={{ border: "1px solid black", borderRadius: "50%" }}
                                />
                            </IconButton>
                        </Grid>     
                    </div>
                              
                </Grid>
            </div>
            

            <div style={{ marginRight: "50px", paddingRight: "80px" }}>
                <Slider ref={customSlider_three} {...settings_small}>
                    <Cards
                        content={"Importance abiut skin Care in winter and tips"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={3}
                        likes={33}
                    />
                    <Cards
                        content={"SKIN CARE"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={4}
                        likes={35}
                    />
                    <Cards
                        content={"COVID-19"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={3}
                        likes={53}
                    />
                    <Cards
                        content={"HAIR CARE"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={5}
                        likes={333}
                    />
                    <Cards
                        content={"AI SKIN CARE"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={5}
                        likes={89}
                    />
                    <Cards
                        content={"SKIN CARE"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={4}
                        likes={76}
                    />
                    <Cards
                        content={"COVID-19"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={2}
                        likes={12}
                    />
                    <Cards
                        content={"HAIR CARE"}
                        media={"../../images/IMAGE HERE-3.png"}
                        rating={5}
                        likes={33}
                    />
                    <Cards content={"COVID-19"} media={"../../images/IMAGE HERE-3.png"} />
                    <Cards content={"HAIR CARE"} media={"../../images/IMAGE HERE-3.png"} />
                </Slider>
            </div>
            <div className="bottom_div">
                <div class="radio_button">
                    <div className="left_article">
                        <Typography align={"left"} >
                            <Box fontWeight="bold" textAlign="center" >
                            All Articles
                            </Box>
                        </Typography>
                    </div>
                    <div className="from_buttons" >
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel value="all" control={<Radio color="black" />} label="ALL" />
                                <FormControlLabel value="skincare" control={<Radio color="black" />} label="SKIN CARE" />
                                <FormControlLabel value="haircare" control={<Radio color="black" />} label="HAIR CARE" />
                                <FormControlLabel value="dentalcare" control={<Radio color="black" />} label="DENTAL CARE" />
                            </RadioGroup>
                    </div>           
                </div>
                <div className="articles">
                    <CardsPage />
                </div>
            </div>
            
        </div>
    )
}

export default Article;
