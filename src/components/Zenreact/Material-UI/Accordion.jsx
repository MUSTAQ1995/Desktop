import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/core/ExpandMOre";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({

}))

function AccordionMobile() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Accordion defaultExpanded>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel1c-content"
             id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Location </Typography>
              </div>
              <div className={classes.column} >
                <Typography className={classes.secondaryHeading}>Select trip Destination</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column} />
              <div className={classes.column} >
                  <Chip label="Barbados" onDelete={() => {}} />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
               <Typography variant="caption">
                  Select your destination of Choice
               </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
                <Button size="small"> Cancel</Button>
                <Button size="small" color="primary"> Save </Button>
            </AccordionActions>
          </Accordion>
        </div>
    )
}

export default AccordionMobile;
