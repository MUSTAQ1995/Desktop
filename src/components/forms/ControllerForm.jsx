import React from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

function ControllerForm() {
    const method = useForm();
    const { handleSubmit, control, reset } = method;
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Controller 
                 as={TextField}
                 name="TextField"
                 control={control}
                 defaultValue=""
               />

               <Controller 
                name="MyCheckbox"
                defaultValue={false}
                control={control}
                rules={{ required: true }}
                render={props =>
                 <Checkbox 
                   onChange={e => props.onChange(e.target.checked)}
                   checked={props.value}
                 />
                }
               
               />
            </form>
        </div>
    )
}

export default ControllerForm
