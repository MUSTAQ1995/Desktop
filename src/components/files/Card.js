import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clip2 from '../img/clip2.png';
import Box from '@material-ui/core/Box';
import GradeIcon from '@material-ui/icons/Grade';
import EventNoteIcon from '@material-ui/icons/EventNote';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={clip2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          < GradeIcon fontSize="small" color="secondary" />
          < GradeIcon fontSize="small" color="secondary" />
          < GradeIcon fontSize="small" color="secondary" />
          < GradeIcon fontSize="small" color="secondary" />
          < GradeIcon fontSize="small" color="secondary" />
         
          <CardActions>
          <EventNoteIcon fontSize="small"/>
              25 Dec 2020, Friday | 9-11AM.
          </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
