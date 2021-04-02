import React from 'react';
import { 
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
} from "@material-ui/core";
import Background from "../img/background.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  root: { minWidth: 250 },
  media: {
      height: 0,
      paddingTop: " 56.25%",
  },
}))

function MaterialCard() {
    const classes = useStyles();

    return (
       <Card className={classes.root}>
         <CardHeader
         action={
             <IconButton aria-label="settings">
                 <MoreVertIcon/>
             </IconButton>
         } 
         title="Lorem Ipsum"
         subheader={
             new Date(+new Date() - Math.floor(Math.random() * 10000000000 ))
             .toISOString()
             .split("T")[0]
         }
         />
         <CardMedia 
          className={classes.media}
          image={Background}
          title="Lorem Ipsum"
         />
         <CardContent>
             <Typography variant="body2" color="textSecondary" component="p">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
             lobortis feugiat vivamus at augue.   
             </Typography>
         </CardContent>
         <CardActions disableSpacing>
             <IconButton aria-label="add to favorites">
                <FavoriteIcon />     
             </IconButton>
             <IconButton aria-label="share">
                 <ShareIcon />
             </IconButton>
         </CardActions>
       </Card>
    )
}

export default MaterialCard;
