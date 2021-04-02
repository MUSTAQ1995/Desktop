import React, {createRef} from 'react'
import './Articles.css';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from './NewsCard';
import { makeStyles } from '@material-ui/core/styles';
import Article from './Articles';
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

  const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "10px",
        marginRight: "100px",
        paddingTop:"10px",
        
    }
 });

function News() {

    const customSlider_two = createRef();
    const customSlider_three = createRef();
    const classes = useStyles()

    function next(item) {
        item.current.slickNext();
    }

    function prev(item) {
        item.current.slickPrev();
    }

    return (
        <div class="mainbody">
            <div class="headline">
              <Article/>
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
                    <Grid item  >
                      <Link style={{color:"#e05297"}} to="/doctor/dashboard/articles">  
                        <Typography variant="h6"> ARTICLES</Typography>
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
                </Grid> 
            </div>

            <div className="bottom_div">
                <div class="radio_button">
                    <div className="left_article">
                        <Typography align={"left"} >
                            <Box fontWeight="bold" textAlign="center" >
                            All News and Events
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
                    <Grid container spacing={1} className = {classes.gridContainer}>
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsCard /> 
                        </Grid>  
                    </Grid>               
                </div>
            </div> 
        </div>
    )
}

export default News;
