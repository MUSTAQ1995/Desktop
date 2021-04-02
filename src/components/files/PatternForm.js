import React from 'react';
import { useForm } from "react-hook-form";

function PatternForm() {
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data)
    return (
      <form onSubmit={handleSubmit(onSubmit)} >
          <input name="lastName" ref={register({ required: true, minLength: 5 })} />
          <input name="firstName" ref={register({ required: true})}  />
          <input name="age" type="number" ref={register({ min: 5, max: 8, required: true})} />
          <input type="submit" />

      </form>
    )
}

export default PatternForm
