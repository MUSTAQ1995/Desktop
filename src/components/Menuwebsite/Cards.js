import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import David from "./David.png";

const useStyles = makeStyles({
  root: {
    maxWidth:150,
    height:150,
    backgroundColor:"whitesmoke",
    marginTop: "50px",
  },
 
  media: {
    height: 100,
    width:100,
    borderRadius: "50%",
    marginLeft: 25,
    border: "2px lightgray",
  }
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={David}
          title="Empolyee Info"
        />
        <CardContent>
          <Typography gutterBottom variant="body" component="h6">
            Ravi Gowda
          </Typography>
          <Typography variant="body" color="textSecondary" component="h6">
            Skills: React, Nodejs, Javascript.
          </Typography>
          <Typography variant="body" color="textSecondary" component="h6">
            Exp:5 years
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

