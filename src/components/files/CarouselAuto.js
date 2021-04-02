import React, { useState } from "react";
// import Slide from "react-swipeable-views";
import Papers from "../Menuwebsite/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  caro: {
   
  }
})

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.caro}>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={true}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Papers/>
        <Papers/>
        <Papers/>
        <Papers/>
        <Papers/>
        {/* <Slide
          media={
            <img src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/08/building-carousel-react-using-only-hook-nocdn.jpg?fit=730%2C487&ssl=1" />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="Rakesh Mishra"
          subtitle="Seno."
        />
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        /> */}
      </AutoRotatingCarousel>
    </div>
  );
};

function CarouselAuto() {
  const [handleOpen, setHandleOpen] = useState({ open: true });
 
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
    
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}


export default CarouselAuto;
