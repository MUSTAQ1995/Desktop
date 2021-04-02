import React from 'react';
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@material-ui/core";



function Reset() {
const {register, handleSubmit, reset, setValue, control } = useForm()


    return (
     <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          as={TextField}
          name="firstName"
          control={control}
          defaultValue=""
        />
     </form>
    )
}

export default Reset
