import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";



function Uilibrary() {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data:IFormInput) => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value}) => <input onChange={onChange} value={value} />}
                />
                 <Controller 
                  name="iceCreamType"
                  control={control}
                  options={[
                      {value: "Chocolate", label: 'Chocolate' },
                      { value: "strawberry", label:"Strawberry" },
                      { value: "vanilla", label: "Vanilla" }
                  ]}
                  as={Select}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Uilibrary
