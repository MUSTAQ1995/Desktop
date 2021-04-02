import React from 'react';
import ProtoTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { 
       Grid,
       Button,
       TextField,
       Tooltip,
       IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";


const useStyles = makeStyles({
    big: {
        maxWidth: 936,
        margin: "auto",
        overflow: "hidden",
    },
    searchBar: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
    searchInput: {
        fontSize: "20px",
    },
    block: {
        display: "block",
    },
    addUser: {
        marginRight: "4px",
    },
    contentWrapper: {
        margin: "40px 16px",
    },
})
   


function Content() {
    const classes  = useStyles();
    return (
       <Paper className={classes.big}>
          <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
              <Toolbar>
                  <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <SearchIcon className={classes.block} color="inherit" />
                      </Grid>
                      <Grid item xs>
                         <TextField
                           fullWidth
                           placeholder="Search by email address, phone number, or user UID"
                           InputProps={{
                               disableUnderline: true,
                               className: classes.searchInput,
                           }}
                         />
                      </Grid>
                      <Grid item>
                          <Button variant="contained" color="primary" className={classes.addUser}>
                              Add User
                          </Button>
                          <Tooltip title="Reload">
                            <IconButton>
                                <RefreshIcon className={classes.block} color="inherit" />
                            </IconButton>
                          </Tooltip>
                      </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
          <div className={classes.contentWrapper}>
              <Typography color="textSecondary" align="center" > 
                  No user for this project yet
              </Typography>
          </div>
       </Paper>
    )
}

export default Content
