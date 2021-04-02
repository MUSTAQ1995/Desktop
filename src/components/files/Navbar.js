import React ,{ useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Toolbar,Typography, Link } from "@material-ui/core";
import "fontsource-roboto";


const useStyles = makeStyles(theme => ({
toolbar: {
    minHeigth: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: theme.spacing(9),
    },
},
toolbarTitle: {
   letterSpacing: 1.25,
   fontWeight: "bold",
},
menuButtons: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row"
    },
},
item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(3)
    },
},
}))

function Navbar() {
    const classes = useStyles();
    const [activeBtn, setActiveBtn] = useState("destination");


    return (
        <Container>
            <Toolbar className={classes.toolbar}>
                <Typography
                 component="h2"
                 variant="h5"
                 color="inherit"
                 align="left"
                 noWrap
                 className={classes.toolbarTitle}
                >
                    GURU'S ADVENTURES
                </Typography>
                <box className={classes.menuButtons}>
                    {["destination", "my gear", "about", "contact"].map(item => (
                        <Link
                         component="button"
                         variant="body2"
                         onClick={() => setActiveBtn(item)}
                         color={activeBtn === item ? "textPrimary" : "textSecondary"}
                         className={classes.item}
                         key={item}
                        >
                          {item.toUpperCase()}
                        </Link>
                    ))}
                </box>
            </Toolbar>
        </Container>
    );
}

export default Navbar;
