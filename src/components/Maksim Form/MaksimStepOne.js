import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { Form } from "./Form";
import { useData } from "./DataContext"
import { PrimaryButton } from "./PrimaryButton"
// import  {yupResolver} from "react-hook-form-resolvers"
import { 
    TextField,
    Button,
    Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from './MainContainer';
import * as yup from "yup";

// const useStyles = makeStyles((theme) => ({
// Button: {
//     margin: theme.spacing(3, 0, 2),
//     width: "100%"
// }
// }))
const schema = yup.object().shape({
    firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
    lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
})

export const MaksimStepOne =() => {
    const { setValues, data } = useData();
    const {register, handleSubmit, errors} = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const history = useHistory()
    // const classes = useStyles();
    const onSubmit = (data) => {
        history.push("/step2")
        console.log(data)
        setValues(data)

    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
             <Input 
             name="firstName" 
             type="text"
             id="firstName"
             label="Enter Your FirstName"         
             ref={register}
             error={errors.firstName}
             helperText={errors?.firstName?.message}
             />
             <br/><br/>
              <Input
             name="lastName"
             id="lastName"
             type="text"
             label="Enter Your LastName"
             ref={register}
             error={!!errors.lastName}
             helperText={errors?.lastName?.message}
             />
             <br/>

             <PrimaryButton 
           
             >NEXT</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default MaksimStepOne
