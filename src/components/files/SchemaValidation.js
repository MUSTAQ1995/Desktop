import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
});

function SchemaValidation() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="firstName" ref={register} />
            <p>{errors.firstName?.message}</p>

            <input type="number" name="age" ref={register} />
            {errors.age?.message}

            <input type="submit" />
        </form>
    )
}

export default SchemaValidation;
