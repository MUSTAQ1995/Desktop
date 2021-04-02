import React from 'react';
import { Formik, Form, Field } from "formik";
import {
    Button,
    LinearProgress,
    makeStyles,
    Paper,
    Typography,
    Grid,MenuItem,
    InputLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import { TimePicker, DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";


const options = [
    { title: "Dr.RamMurthy", value: 1994 },
    { title: "Dr.NarayanaMurthy", value: 1972 },
    { title: "Dr.Ramesh KB", value: 1974 },
    { title: "Dr.Naresh BN", value: 2008 },
    { title: "Dr.Sagar GH", value: 1957 },
    { title: "Dr.KrishnaMurthy", value: 1993 },
    { title: "Dr.Deepak s.", value: 1994 },
  ];

  const treatment = [
    { title: "Pulmanalogy", value: 1994 },
    { title: "Cardiology", value: 1972 },
    { title: "Oncolgy", value: 1974 },
    { title: "Urology", value: 2008 },
    { title: "OrthoPedics", value: 1957 },
    { title: "Nerology", value: 1993 },
    { title: "Pediatricks", value: 1994 },
  ];

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginLeft: "40px",
        marginRight: "40px",
        display: "flex",
    },
}));

const validationSchema = Yup.object().shape({
    doctor: Yup.string().required().label(" Doctor "), 
    patient: Yup.string().required().min(6).label("Patient"),
    date: Yup.date()
          .test("min", "Date must be other than today", (value) => {
              return value >= new Date();
          })
          .required()
          .label("Date"),
    time: Yup.date().required().label("Time"), 
    type: Yup.string().required().label("Treatment"), 
    email: Yup.string().email("Inavalid email format").required("Required"),
    password: Yup.string().required("Required"),
   
       
});


function FormYou() {
const clsses = useStyles();

return (
<Grid container spacing={1} style={{ marginBottom: "30px" }}>
    <Grid item xs={12} >
        <Typography variant="h4" style={{ marginBottom: "15px", textAlign: "center",paddingTop: "50px" }}>
            Book An Appointment
        </Typography>
        <Grid item >
        <RadioGroup row aria-label="position" name="position" defaultValue="follow">
         <FormControlLabel value="follow" control={<Radio color="primary" />} label="Follow Up" />
         <FormControlLabel value="second" control={<Radio color="primary" />} label="Second Opinion" />
         <FormControlLabel value="pre" control={<Radio color="primary" />} label="Pre-Consultation" />
         <FormControlLabel value="express" control={<Radio color="primary" />} label="Express Check in" />
        </RadioGroup>
        </Grid>
        
            <Formik 
            initialValues={{
                doctor: "",
                patient: "",
                date: new Date(),
                time: new Date(),
                type: "",
                phonenumber: "",
                email: "",
                password: "",
                
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            >
            {({ submitForm, isSubmitting, toouched, errors }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Form>
                        <Grid container spacing={6} justify={"center"}>
                            <Grid
                                item
                                xs={6}
                                style={{ display: "flex", flexDirection: "column", paddingLeft: "50px" }}
                            >
                         <h4>Select Doctor</h4>
                            <Field
                            component={TextField}
                            type="text"
                            name="doctor"
                            label="Select The Doctor"
                            select
                            variant="outlined"
                            placeholder="Select The Doctor"
                            helperText="Select a Doctor"
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            style={{ minHeight: "5rem", marginTop: "0" }}
                          >
                              <InputLabel>Select a Doctor </InputLabel>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option.title}
                                value={option.title}
                                selected={index === 1}
                              >
                                {option.title}
                              </MenuItem>
                            ))}
                          </Field>  
                          
                          <h4>Patient Name</h4>  
                                <Field
                                component={TextField}
                                name="patient"
                                type="string"
                                label="Name of the Patient"
                                placeholder="Enter Name of the Patient"
                                helperText="Enter the Name of Patient"
                                variant="outlined"
                                style={{ minHeight: "5rem" }}
                                />  
                                <br />
                                <h4>Appointment Date</h4>
                                <Field 
                                    component={DatePicker}
                                    name="date"
                                    label="Date"
                                    variant="outlined"
                                    style={{ minHeight: "5rem" }}
                                    helperText="Set a Date"
                                />
                                <br />  
                                <Field 
                                   component={TextField}
                                   name="email"
                                   tyoe="email"
                                   label="Enter your Email Address"
                                   placeholder="Enter Your Email address"
                                   variant="outlined"
                                   style={{ minHeight: "5rem" }}
                                />

                                </Grid> 
                                  
                                <Grid
                                    item
                                    xs={6}
                                    style={{ display: "flex", flexDirection: "column", paddingRight: "50px" }}
                                >
                                    <h4>Treatment</h4>
                                <Field
                                component={TextField}
                                type="text"
                                name="type"
                                label="Select Treatment"
                                select
                                variant="outlined"
                                placeholder="Select The Doctor"
                                helperText="Select a Treatment"
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                style={{ minHeight: "5rem", marginTop: "0" }}
                                >
                                <InputLabel>Select a Treatment </InputLabel>
                                {treatment.map((option, index) => (
                                <MenuItem
                                    key={option.title}
                                    value={option.title}
                                    selected={index === 1}
                                >
                                    {option.title}
                                </MenuItem>
                                ))}
                                </Field>    
                                <h4>Phone No.</h4>
                                <Field 
                                    component={TextField}
                                    type="number"
                                    name="phonenumber"
                                    label="Patient Phone Number"
                                    variant="outlined"
                                    placeholder="Enter The Phone Number "
                                    style={{ minHeight: "5rem"}}
                                    helperText="Enter The Phone Number"
                                />
                                <br/>
                                <h4>Time Slot</h4>
                                <Field 
                                    component={TimePicker}
                                    name="time"
                                    label="Time"
                                    variant="outlined"
                                    style={{ minHeight: "5rem" }}
                                    helperText="Set a Time"
                                />
                                <br />
                                <Field  
                                  component={TextField}
                                  name="password"
                                  type="password"
                                  label="Password"
                                  placeholder="Enter Your Password"
                                  variant="outlined"
                                  style={{ minHeight: ":5rem"}}
                                
                                />
                            </Grid>
                            <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Submit
                                </Button>
                                <br />
                                {isSubmitting && <LinearProgress />}
                        </Grid>
                    </Form>
                </MuiPickersUtilsProvider>
                )}
            </Formik>
        
    </Grid>
</Grid>               
)
}

export default FormYou;
