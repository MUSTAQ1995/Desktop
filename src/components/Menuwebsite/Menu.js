import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import{ makeStyles }  from "@material-ui/core/styles";




const useStyles = makeStyles({
  menu: {
   backgroundColor:"blue", 
   height:"40px",
  },
  para: {
      marginTop:"6px",
  }
})

function Menu() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.menu}>
              <h2 className={classes.para}>The Menu</h2>      
            </AppBar>
        </div>
    )
}

export default Menu;
