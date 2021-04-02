import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles((theme) =>({
root: {
    magin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta"
}
}))

function Header() {
    const classes = useStyles()
    return (
       <Typography component="h1" className={classes.root}>
           The Form 
       </Typography>
    )
}

export default Header
