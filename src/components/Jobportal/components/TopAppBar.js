import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import MoreIocn from "@material-ui/icons/MoreVert";

import fire from "../conifg/fire";
const styles = theme => ({
    root: {
        width: "100%",
    },
    grow: {
        glexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: "flex",
        },
    },

    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
});


export class TopAppBar extends Component {
    state = {
        anchorE1: null,
        mobileMoreAnchorE1: null,
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchor: event.currentTarget });
    };

    handleSignOutPressed = () => {
        this.setState({ anchorE1: null, mobileMoreAnchorE1: null});
        console.log('sign Out Pressed')
        fire.auth().signOut()
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            console.log(error);
        });
    }
        hanleEditProfile = () => {
            this.setState({ anchorE1,  mobileMoreAnchorE1: null})
            console.log("Navigatr to Profile Update Page")
        }

        handleMenuClose = () => {
            this.setState({ anchorE1: null });
            this.handleMenuClose();
        };

        handleMobileMenuOpen = event => {
            this.setState({ anchorE1: null });
            this.handleMobileMenuClose();
        };

        handleMobileMenuClose = () => {
            this.setState({ mobileMoreAnchorE1: null });
        };

        logout = () => {
            fire.auth().signOut()
            .then((success) => {
                console.log(success);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    

    render() {  
        const { anchorE1, mobileMoreAnchorE1 } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorE1);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorE1);

        const renderMenu = (
            <Menu
              anchorE1={anchorE1}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClsoe}
            >
             <MenuItem onClick={this.handleEditProfile}>Edit Profile</MenuItem> 
             <MenuItem onClick={this.handleSignOutPressed}>Sign Out</MenuItem>
            </Menu>
        );

        const renderMobilMenu = (
            <Menu
              anchorEl={mobileMoreAnchorE1}
              anchorOrigin={{ vertical: "top", horizontal: "right"}}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMobileMenuOpen}
              onClose={this.handleMobileMenuClose}
            >
              <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                      <WorkIcon />
                    </Badge>
                </IconButton>
                <p>Notification</p>
              </MenuItem>
              <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton color="inherit">
                  <AccountCircle/>
                </IconButton>
                <p>Profile</p>
              </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                  <Toolbar>
                      <IconButton 
                        onclick={this.logout}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                      >
                          <MoreIocn />
                      </IconButton>
                      <Typography 
                      className={classes.title} 
                      variant="h6" color="inherit" noWrap
                      >
                         Job Portal
                      </Typography>
                      <div className={classes.grow} />
                      <div className={classes.sectionDesktop}>
                         <IconButton color="inherit">
                           <Badge badgeContent={17} color="secondary">
                               <WorkIcon/>
                           </Badge>
                         </IconButton>
                         <IconButton 
                          aria-owns={isMenuOpen ? 'material-appbar' : undefined }
                          aria-haspopup="true"
                          onClick={this.handleProfileMenuOpen}
                          color="inherit"
                         >
                           <AccountCircle />
                         </IconButton>
                      </div>
                  </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMObileMenu}
            </div>
        )
    }
}

 TopAppBar.proptypes = {
     classes: PropTypes.object.isRequired,
 };


export default withStyles(styles)(TopAppBar);
