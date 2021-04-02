import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { Typography, Button, Grid,
CheckBox,
TextField,
OutlinedInput,
FormControl,
InputLabel,
IconButton,
InputAdornment,
} from "@material-ui/core";
import  Visibilityoff  from "@material-ui/icons/VisibilityOff";
import Visibility  from "@material-ui/icons/Visibility";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup" 


const schema = yup.object().shape({
    firstname:yup 
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
    lastname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
})
const useStyles = makeStyles({
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    formContainer: {
        position: "relative",
        width: '28.125rem',
        height: "auto",
        padding: "2rem",
    },
    inputFiled: {
width: "100%",
margin: "1rem 0",
    },
    button: {
        width:"100%",
        margin:"3rem 0",
        background: "blue",
        color: "#fff"
    }
})

function StepOne() {
 const classes = useStyles()
 const {register, handleSubmit, errors} = useForm({
     mode: "onBlur",
     resolver: yupResolver(schema)
 });

 const onSubmit=((data) => {
     console.log(data)
 })
 console.log(errors)
 
 const [showPasswordValue, setShowPasswordValue] = useState({
     showPassword: false,
 })

 const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false,
});

const handleClickShowPassword = () => {
    setShowPasswordValue({
        showPassword:!showPasswordValue.showPassword
    })
}
const handleClickShowConfirmPassword = () => {
    setShowConfirmPasswordValue({
        showConfirmPassword:!showConfirmPasswordValue.showConfirmPassword
    })
}
    return (
        <div className={classes.mainContainer}>
          <Typography 
          variant="h5"
          style={{ color: '#999', textAlign: "center" }}
          >
             sign up the Email
          </Typography>
          <div className={classes.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
              className={classes.inputFiled}
              label="First Name"
              variant="outlined"
              name="firstname"
              type="text"
              id="firstname"
              ref={register}
              error={!!errors.firstname}
              helperText={errors?.firstname?.message}
              />
              <TextField
              className={classes.inputFiled}
              label="Last Name"
              variant="outlined"
              name="lastname"
              id="lastname"
              type="text"
              ref={register}
              error={!!errors.lastname}
              helperText={errors?.lastName?.message}
              />
              <IntlTelInput 
               preferredCountries={["in"]}/>
               <TextField
              style={{ width: "100%", margin: "1rem 0"}}
              label="Email"
              variant="outlined"
              />
              <FormControl variant="outlined" className={classes.inputFiled}>
                  <InputLabel>PASSWORD</InputLabel>
                  <OutlinedInput 
                  labelWidth={95}
                  type={showPasswordValue.showPassword ? "text" : "password"}
                  endAdornment={
                      <InputAdornment 
                      position="end">
                      <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      >
                          {showPasswordValue.showPassword ? <Visibility/>: 
                          <Visibilityoff />}
                      </IconButton>
                      </InputAdornment>
                  }/>
              </FormControl>
              <FormControl variant="outlined" className={classes.inputFiled}>
                  <InputLabel>Confirm Password</InputLabel>
                  <OutlinedInput 
                  labelWidth={135}
                  type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
                  endAdornment={
                      <InputAdornment 
                      position="end">
                      <IconButton
                      edge="end"
                      onClick={handleClickShowConfirmPassword}
                      >
                          {showConfirmPasswordValue.showConfirmPassword ? <Visibility/>: 
                          <Visibilityoff />}
                      </IconButton>
                      </InputAdornment>
                  }/>
              </FormControl>
              <>
              <Button 
              variant="contained"
              type="submit"
              className={classes.button}
              endIcon={<SendSharpIcon />}
              >
               SIGN UP
              </Button>
              </>
         </form>
        </div>  
        </div>      
    )
}

export default StepOne
