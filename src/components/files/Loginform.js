import React from 'react';
import { Formik, Form, Field } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
    Button,
    LinearProgress,
    Grid,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import "./Loginform.css";



const validationSchema = Yup.object().shape({
    email: Yup.string().email("Inavalid email format").required("Required"),
    password: Yup.string().required("Required"), 
});
function Loginform() {
 
    return (
        <div className="login__body">
          <div className="login__img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcYTf0hpaLN3_R2Z8pibhh8daPkoUaifWNQ&usqp=CAU" alt="" />
          </div>
           <h3>Sign in</h3>
          <h5>to continue to gmail</h5> 
          <div className="login__form">        
           <Formik 
            initialValues={{
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
                        <Grid container spacing={3} justify={"center"}>
                            <Grid
                                item
                                xs={12}
                                style={{ display: "flex", flexDirection: "column", margin: "20px"}}
                            >
                                <Field 
                                   component={TextField}
                                   name="email"
                                   tyoe="email"
                                   label="Enter your Email Address"
                                   placeholder="Enter Your Email address"
                                   variant="outlined"
                                   helperText="Forgot mail?"
                                   style={{ minHeight: "5rem" }}
                                /> 
                                
                                <Field  
                                    component={TextField}
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Enter Your Password"
                                    variant="outlined"
                                    helperText="Forgot Password?"
                                    style={{ minHeight: ":5rem"}}                               
                                    /> 
                                </Grid>                                       
                        </Grid>
                        <p>Not your computer? Use Guest mode to sign in privately.</p>
                        <p style={{ color: "blue"}} >Learn More</p>
                        <Grid container spacing={6} justify={"center"}>
                            <Grid 
                            item
                            xs={12}
                            style={{ display: "flex", flexDirection: "column", margin: "20px"}}
                            >
                                 <h3 style={{ color: "blue"}}>Create Account</h3>
                                   <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                   > Submit
                                    </Button>                        
                                {isSubmitting && <LinearProgress />}
                            </Grid>
                        </Grid>                      
                    </Form>
                </MuiPickersUtilsProvider>
                )}
            </Formik>
           </div>
        </div>
    )
}

export default Loginform;

