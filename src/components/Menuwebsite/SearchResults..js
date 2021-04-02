import React from 'react';
import { makeStyles } from "@material-ui/core";
import Details from './Details';



const useStyles = makeStyles({
  search__result: {
      margin: "0 auto",
      width: "90%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
  },
  profile: {
      border: "1px solid lightgray",
      margin: "10px",
      height: '30%',
      display: 'flex',
      padding: "10px",
      justifyContent: "space-around",
      backgroundColor:"white",
      borderRadius: "20px",
  },
  info: {
      width: "40%",
      flex: "0.9",
      textAlign: "start",
      margin: "10px",      
  },
  picture: {
     width: "25%",
     textAlign: "center",
  },
  image: {
    objectFit: "contain",
    height: "50%",
    width: "50%",
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "whitesmoke",
  },
})

function SearchResults() {
    const classes = useStyles()


    return (
        <div className={classes.search__result}>
          <div className={classes.profile}>
            <div className={classes.info}>
              <Details/>
            </div>
            <div className={classes.picture}>
             <img className={classes.image}
                src="https://static.politico.com/dims4/default/a42d13f/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F2f%2F24%2Fa2313fba42a79b974a33c6b2b999%2Fap21028680013969.jpg" alt=""/>
            </div>
          </div>
          <div className={classes.profile}>
            <div className={classes.info}>
              <Details/>
            </div>
            <div className={classes.picture}>
             <img className={classes.image}
                src="https://static.politico.com/dims4/default/a42d13f/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F2f%2F24%2Fa2313fba42a79b974a33c6b2b999%2Fap21028680013969.jpg" alt=""/>
            </div>
          </div>
          <div className={classes.profile}>
            <div className={classes.info}>
              <Details/>
            </div>
            <div className={classes.picture}>
             <img className={classes.image}
                src="https://static.politico.com/dims4/default/a42d13f/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F2f%2F24%2Fa2313fba42a79b974a33c6b2b999%2Fap21028680013969.jpg" alt=""/>
            </div>
          </div>
          <div className={classes.profile}>
            <div className={classes.info}>
              <Details/>
            </div>
            <div className={classes.picture}>
             <img className={classes.image}
                src="https://static.politico.com/dims4/default/a42d13f/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F2f%2F24%2Fa2313fba42a79b974a33c6b2b999%2Fap21028680013969.jpg" alt=""/>
            </div>
          </div>
          <div className={classes.profile}>
            <div className={classes.info}>
              <Details/>            
            </div>
            <div className={classes.picture}>
             <img className={classes.image}
                src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg" alt=""/>
            </div>
          </div>
        </div>
    )
}

export default SearchResults;
