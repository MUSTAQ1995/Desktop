import React from 'react';
import { useForm } from "react-hook-form";



function HandleErrors() {
const { register, errors, handleSubmit } = useForm();
const onSubmit = data => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="firstName" ref={register({ required: true })} />
                {errors.firstName && "First name is Needed"}
                <input name="lastName" ref={register({ required: true })} />
                {errors.lastName && "Last name is needed" }
                <input type="submit" />
            </form>
        </div>
    )
}

export default HandleErrors
