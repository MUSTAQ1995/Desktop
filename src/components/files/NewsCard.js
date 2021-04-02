import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Paper,
    Typography,
    useTheme,
  } from "@material-ui/core";
  import { Rating } from "@material-ui/lab";
  import EventNoteIcon from '@material-ui/icons/EventNote';
  import FavoriteIcon from "@material-ui/icons/Favorite";
  import React from "react";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      height: "300px",
      maxWidth: "400px",
      margin: " 10px 10px 20px 10px",
      borderRadius: "15px",
      overflow: "hidden",
      alignItems: "left",
    },
    cardMedia: {
      height: "150px",
    },
    cardContent: {
      minHeight: "80px",
      width: "400px",
      alignItems: "left",
    },
    hint: {
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      right: "10px",
      top: "30px",
      padding: "5px",
      [theme.breakpoints.down("md")]: {
        right: "10px",
      },
    },
    hintText: { fontSize: "0.85rem", color: "white" },
  }));
  
  function NewsCard({ media, content, hintText, HintIcon, likes, rating }) {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <div>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={media}>
                {(hintText || HintIcon) && (
                    <>
                        {HintIcon && <HintIcon style={{ marginRight: "3px" }} />}
                        {hintText && (
                            <Paper className={classes.hint}>
                                <Typography className={classes.hintText}>
                                {hintText}
                                </Typography>
                            </Paper>
                        )}
                    </>
                )}
            </CardMedia>
            <CardContent className={classes.cardContent}>
                <Grid container >
                    <Grid
                        item
                        container
                        justify="space-between"
                        xs={12}
                        style={{ marginBottom: "15px" }}
                    >
                        <Grid item >
                            <Typography align={likes ? "left" : "center"}>
                                <Box fontWeight="bold" fontSize="fontSize">
                                {content}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    {rating && (
                        <Grid item align={"left"}>
                            <Rating
                                size="small"
                                defaultValue={5}
                                value={rating % 5 ? rating : 5}
                                readOnly
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid item align={"left"}>
                    <Typography >
                        <Box fontSize="10" >
                        <EventNoteIcon color="primary" />
                        24th Dec 2020, Thursday | 9-11AM   
                        </Box>
                    </Typography>   
                </Grid>
                <Grid item align={"left"}>
                    <Typography >
                        <Box  fontSize="fontsize" >
                        Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor  
                        </Box>    
                    </Typography>   
                </Grid>                     
            </CardContent>
        </Card>
      </div>
    );
  }
  
  export default NewsCard;
  