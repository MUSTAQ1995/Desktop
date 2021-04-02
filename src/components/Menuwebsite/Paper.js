import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 145,
        maxheight:150,
        border: "1px solid black",
        background: "lightGreen",
        marginTop: "50px",
    },
    media: {
        height: 70,
        width: 70,
        margin: "auto",
        border: "2px solid lightgray",
        borderRadius: "50%",
      },
  }));

function Papers() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.unilad.co.uk/wp-content/uploads/2017/08/Longclaw-A.jpg"
          title="Employee Info"
        />
        <CardContent>
          <Typography gutterBottom variant="body" component="h6">
            Rakesh Mishra
          </Typography>
          <Typography variant="body"  component="h6">
            Senior App Developer,
          </Typography>
          <Typography variant="body" component="h6">
            5+ Years of Experiance.
          </Typography>
          <Typography variant="body"  component="h6">
            ReaxJS, ExpressJS, Redux, Angular 7.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default Papers
