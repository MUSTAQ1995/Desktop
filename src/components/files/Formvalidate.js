import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Maksim Form/Input";
import { Form } from "../Maksim Form/Form";
import { PrimaryButton } from "../Maksim Form/PrimaryButton";
import { 
    Typography
} from "@material-ui/core";
import MainContainer from '../Maksim Form/MainContainer';
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
    lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
    email:yup
    .string()
    .email("Email Should have correct format")
    .required("Email is a required field"),
    password: yup
    .string()
    .required("Password is a required field")
    .max(5),
})

export const Formavalidate =() => {
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur",
        //onBlur:this way it only trigger a state update when you switch to the next field or click outside of the form input.
        resolver: yupResolver(schema)
    });
    const history = useHistory()
    // const classes = useStyles();
    const onSubmit = (data) => {
        console.log(data)
        alert(JSON.stringify(data,null,1))
    }

   
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                SignUp For the mail
            </Typography>
            
            <Form  onSubmit={handleSubmit(onSubmit)}>
             <Input 
             name="firstName" 
             type="text"
             id="firstName"
             label="Enter Your FirstName"         
             ref={register}
             required
             error={errors.firstName}
             helperText={errors?.firstName?.message}
             />
             <br/><br/>
              <Input
             name="lastName"
             id="lastName"
             type="text"
             required
             label="Enter Your LastName"
             ref={register}
             error={!!errors.lastName}
             helperText={errors?.lastName?.message}
             />
             <br/>
             <Input 
              ref={register}
              type="email"
              label="Email"
              name="email"
              required
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
            <Input 
              ref={register}
              type="password"
              label="Password"
              name="password"
              required
              error={!!errors.password}
              helperText={errors?.password?.message}
            />

             <PrimaryButton     
             >NEXT</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Formavalidate;
