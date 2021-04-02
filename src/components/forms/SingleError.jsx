import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";



function SingleError() {
const { register, errors, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data)

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                 name="singleErrorInput"
                 ref={register({ required: "This is required message"})}
                />
                <ErrorMessage errors={errors} name="singleErrorInput" as="p" />
                <ErrorMessage 
                 errors={errors}
                 name="singleErrorInput"
                 render={({ message }) => <p>{message}</p>}
                />
                <input type="submit" />
          </form>        
        </div>
    )
}

export default SingleError
