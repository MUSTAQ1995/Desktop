import React from 'react';
import PropTypes from "prop-types";
import { 
    AppBar,
    Button,
    Grid,
    Avatar,
    Hidden,
    IconButton,
    Link,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography,
 }from "@material-ui/core";
 import HelpIcon from "@material-ui/icons/Help";
 import MenuIcon from "@material-ui/icons/Menu";
 import NotificationIcon from "@material-ui/icons/Notifications";
 import { withStyles } from "@material-ui/core/styles";
 import meeting from "../../img/meeting.png"


 const lightColor = "rgba(255, 255, 255, 0.7)";

 const styles = (theme) => ({
     secondaryBar: {
         zIndex: 0,
     },
     menuButton: {
         marginLeft: -theme.spacing(1),
     },
     iconButtonAvatar: {
         padding: 4,
     },
     link: {
         textDecoration: "none",
         color: lightColor,
         "&:hover": {
             color: theme.palette.common.white,
         },
     },
     button: {
         borderColor: lightColor,
     }, 
 });

function Header(props) {
    const { classes, onDrawerToggle } = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
              <Toolbar>
                <Grid container spacing={1} alignItems="center">
                  <Hidden smUp>
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-lable="open drawer"
                          onClick={onDrawerToggle}
                          className={classes.menuButton}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Grid>
                  </Hidden>
                  <Grid item xs />
                  <Grid item>
                    <Link className={classes.link} href="#" variant="body2">
                        Go To Docs
                    </Link>
                  </Grid>
                  <Grid item >
                    <Tooltip title="Alerts No alerts" >
                      <IconButton color="inherit">
                        <NotificationIcon/>
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <IconButton color="inherit" className={classes.iconButtonAvatar}>
                       <Avatar src="../../img/meeting.png" lat="My Avatar" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <AppBar
              component="div"
              className={classes.secondaryBar}
              color="primary"
              position="static"
              elevation={0}
            >
              <Toolbar>
                  <Grid container alignItems="center" spacing={1}>
                   <Grid item xs>
                     <Typography color="inherit" variant="h5" component="h1">
                        Authentication
                     </Typography>
                   </Grid>
                   <Grid item>
                      <Button 
                        className={classes.button} 
                        variant="outlined" 
                        color="inherit" 
                        size="small"
                      >
                        Web setup
                      </Button>
                   </Grid>
                   <Grid item>
                     <Tooltip title="help">
                       <IconButton color="inherit">
                         <HelpIcon />
                       </IconButton>
                     </Tooltip>
                   </Grid>
                  </Grid>
              </Toolbar>
            </AppBar>
            <AppBar
              component="div"
              className={classes.secondaryBar}
              color="primary"
              position="static"
              elevation={0}
            >
              <Tabs value={0} textColor="inherit" >
                 <Tab textColor="inherit" label="Users"/>
                 <Tab textColor="inherit" label="Sign-in method"/>
                 <Tab textColor="inherit" label="Templates"/>
                 <Tab textColor="inherit" label="Usage"/>
              </Tabs>
            </AppBar>
        </React.Fragment>
    )
}

Header.prototype = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
