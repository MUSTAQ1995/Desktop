import React from 'react';
import { 
    Drawer, 
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,     
}from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PublicOutlinedIcon from "@material-ui/icons/PublicRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import TimerRoundedIcon from "@material-ui/icons/Timer";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetupRounded";
import SettingsEthernetOutlinedIcon from "@material-ui/icons/SettingsEthernetOutlined"
import PhotoSizeSelectActualRoundedIcon from "@material-ui/icons/PhotoSizeSelectActualRounded";
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import { ThemeProvider } from 'react-bootstrap';

const useStyles = makeStyles({
  item: {
      paddingTop: "4px",
     
      color: "rgba(255, 255, 255, 0.7)",
      '&:hover,&:hover': {
          backgroundColor: 'rgba(250, 250, 250, 0.5)',
          color: 'white',
          fontSize: '20px',
      },
  },
  itemCategory: {
      backgroundColor: "rgba(10,10, 10, 0.8)",
      boxShadow: "0 -1px 0 #404854 inset",
    
  },
  firebase: {
      fontSize: "20px",
      color: "white",
  },
  itemIcon: {
      minWidth:"auto",
      marginRight: "4px",
  },
  itemPrimary: {
      fontSize: "inherit",
  },
  categoryHeader: {
      paddingTop: "8px",
      paddingBottom: "8px",
  },
   categoryHeaderPrimary: {
       color: '#fff',
   },
   itemActiveItem: {
       color: "#4fc3f7",
   },
  
       
   
   div: {
       backgroundColor:"#232f3e",   
   },
   auth: {
       color: "lightblue",
   }, 
   itemtext: {
       color: "white",
       fontSize: '20px',
   },
   itemicon: {
       color: "white",
  
   },
   listitem:{
     color: "white",
    '&:hover, &:hover': {
     backgroundColor: "rgba(10,10,10, 0.5)",
    },
  },
})

function Navbar() {
    const classes = useStyles();
   
    return (
        <div className={classes.navbar} >
        <Drawer variant="permanent" className={classes.drawer}>
            <List>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                    PaperBase
                </ListItem>
                <Divider/>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.itemPrimary,}}>
                        Project OverView
                    </ListItemText>
                </ListItem>
                <Divider/>
                <div className={classes.div}>
                <ListItem >
                    <ListItemText className={classes.itemtext}>
                     Develop
                    </ListItemText>
                </ListItem>
                    <ListItem className={clsx(classes.item, classes.icon, classes.itemActiveItem)}>
                    <ListItemIcon className={classes.auth}>
                        <GroupIcon/>
                    </ListItemIcon>
                    <ListItemText className={clsx(classes.auth)}>
                        Authentication
                    </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <DnsRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        Database
                    </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <PhotoSizeSelectActualRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        Storage
                    </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <PublicOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        Hosting
                    </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                    <SettingsEthernetOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        Functions
                    </ListItemText>
                    </ListItem>
                   <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <SettingsInputComponentIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        ML Kit
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText className={classes.itemtext}>
                    Quality
                    </ListItemText>                   
                </ListItem>
                <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                    <SettingsRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.itemtext}>
                        Analytics
                    </ListItemText>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <TimerRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText  className={classes.itemtext}>
                        Performance
                    </ListItemText>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <ListItemIcon className={classes.itemicon}>
                        <PhonelinkSetupIcon/>
                    </ListItemIcon>
                    <ListItemText  className={classes.itemtext}>
                        Test Lab
                    </ListItemText>
                </ListItem>
                <Divider/>
                </div>
                
            </List>
        </Drawer>
        </div>
    )
}

export default Navbar
