import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";

function HookfromSix() {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <Controller
             name="firstName"
             control={control}
             defaultValue=""
             render={({ onChange, value }) => <input onChange={onChange} value={value} /> }
           />
           <Controller 
             name="iceCreamType"
             control={control}
             options={[
                 { value: "chocolate", label: "Chocolate" },
                 { value: "strawberry", label: "Strawberry" },
                 { value: "vanila", label: "Vanilla" }
             ]}
             as={Select}
           />
           <input type="submit" />
        </form>
    )
}

export default HookfromSix
