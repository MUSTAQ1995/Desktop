import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

function MainContainer({ children, ...props }) {
    const classes = useStyles();

    return (
      <Container 
       className={classes.root}
       component="main"
       maxWidth="xs"
      >
          {children}
      </Container>
    )
}

export default MainContainer
