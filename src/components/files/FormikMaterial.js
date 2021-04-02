import React from "react";
import { Formik, Form, Field } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  Button,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
  Grid,
  MenuItem,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { TimePicker, DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, RadioGroup } from "formik-material-ui";
import * as Yup from "yup";



const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginLeft: "40px",
    marginRight: "40px",
    display: "flex",
  },
}));

const validationSchema = Yup.object().shape({
  doctor: Yup.string().required().min(4).label("Doctor Name"),
  patient: Yup.string()
    .required()
    .matches(/^(?:\b\w+\b[\s\r\n]*){1,40}$/, "Keep 40 words limit")
    .label("Patient Name"),
  date: Yup.date()
    .test("min", "Date must be later than today", (value) => {
      return value >= new Date();
    })
    .required()
    .label("Date"),
  type: Yup.string().required().label("Treatment"),
  time: Yup.date().required().label("Time"),
  consultation: Yup.string().required().label("Consultation"),
  pay: Yup.string().required().label("Pay"),
  links: Yup.string().url().required().label("Links"),
//   phonenumber: Yup.number().required().min(10)
//   .matches(/^[0-9\b]+$/, "Atleast 10 Numbers").label("Phone Number"),
});

export default function FormikMaterial() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{ marginBottom: "30px" }}>
      <Grid item xs={12} lg={12}>
        <Typography variant="h4" style={{ marginBottom: "15px" }}>
          Book An Appointment
        </Typography>
        <Paper style={{ padding: "50px" }}>
          <Formik
            initialValues={{
              doctor: "",
              patient: "",
              type: "",
              date: new Date(),
              time: new Date(),
              consultation: "yes",
              pay: "yes",
              links: "",
             
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting, touched, errors }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form>
                  <Grid container spacing={6}>
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", flexDirection: "column" }}
                    > <p>Doctor Name</p>
                      <Field
                        component={TextField}
                        name="doctor"
                        type="string"
                        placeholder="Enter the Doctor Name"
                        label="Doctor Name"
                        helperText="Enter the Doctor Name"
                        variant="outlined"
                        style={{ minHeight: "5rem" }}
                      />
                     
                      <br />
                      <p>Patient Name</p>
                      <Field
                        component={TextField}
                        type="string"
                        label="Patient Name"
                        placeholder="Enter name of the Patient"
                        name="patient"
                        variant="outlined"
                        helperText="Name of the Patient"
                        style={{ minHeight: "5rem" }}
                      />
                      <br />
                      <p>Appointment Date</p>
                      <Field
                        component={DatePicker}
                        name="date"
                        label=" Appointment Date"
                        variant="outlined"
                        style={{ minHeight: "5rem" }}
                      />
                      <br />
                      <p>Appointment Time</p>
                      <Field
                        component={TimePicker}
                        name="time"
                        label="Appointment Time"
                        variant="outlined"
                        style={{ minHeight: "5rem" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", flexDirection: "column" }}
                    ><p>Treatment</p>
                     <Field
                        component={TextField}
                        type="string"
                        label="Treatment Type"
                        placeholder="Select the Treatment Type"
                        name="type"
                        variant="outlined"
                        helperText="Treatment"
                        style={{ minHeight: "5rem" }}
                      >
                      </Field>
                      <br />
                      <p>Phone Number</p>
                      <Field
                        component={TextField}
                        name="phonenumber"
                        type="number"
                        placeholder="Enter Patient Phone Number"
                        label="Phone Number"
                        helperText="Enter the Phone Number"
                        variant="outlined"
                        style={{ minHeight: "5rem" }}
                      />                      
                      <br />
                      <Field
                        component={TextField}
                        type="string"
                        label="Links"
                        name="links"
                        placeholder="links"
                        variant="outlined"
                        style={{ minHeight: "5rem" }}
                      />
                      <br />
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
                  </Grid>
                </Form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

