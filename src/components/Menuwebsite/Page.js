import React from 'react';
import Menu from "./Menu";
import Search from "./Search";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteCarousel from './InfiniteCarousel';
import RequestTable from './RequestTable';



const useStyles = makeStyles({
    page: {
        background: "white",
    },
    upper: {
        height:"97vh",
        overflowY: "scroll",
    },
    auto: {
      height: "200px",
      border: '2px solid blue',
      marginTop:200
    }
});

function Page() {
    const classes = useStyles();
    return (
        <div className={classes.page}>
          <div className={classes.upper}>
             <Menu /> 
             <InfiniteCarousel/>
            <Search/>
          </div>
          <RequestTable/>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
        
    )
}

export default Page;
