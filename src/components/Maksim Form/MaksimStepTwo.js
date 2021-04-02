import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useData } from './DataContext';
import { Form } from './Form';
import { Input } from './Input';
import { yupResolver } from "@hookform/resolvers/yup";
import MainContainer from './MainContainer';
import { Typography } from "@material-ui/core";
import * as yup from "yup";
import { PrimaryButton } from './PrimaryButton';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
}

const schema = yup.object().shape({
    email:yup
      .string()
      .email("Email Should have correct format")
      .required("Email is a required field"),
});

function MaksimStepTwo() {
    const { data, setValues } = useData();
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber
        },
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
 const hasPhone = watch("hasPhone");
 const onSubmit = (data) => {
     history.push("/step3")
     setValues(data)
 }

    return (
        <MainContainer>
        <Typography>
            Step 2
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              ref={register}
              type="email"
              label="Email"
              name="email"
              required
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
            <FormControlLabel 
              control={<Checkbox
                defaultChecked={data.hasPhone}
                defaultValue={data.hasPhone}
                color="primary"
                inputRef={register}
                name="hasPhone"    
            />}label="Do you have a phone" />

            {hasPhone && (
                <Input 
                  ref={register}
                  id="phoneNumber"
                  type="tel"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={
                      (event) => {
                          event.target.value = normalizePhoneNumber(event.target.value)
                      }
                  }
                />
            )}
            <PrimaryButton>NEXT</PrimaryButton>
        </Form>
    </MainContainer>
    )
}

export default MaksimStepTwo;
