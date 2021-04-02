import React from 'react';
import { useForm } from "react-hook-form";

function FormState() {
  const { register, handleSubmit, formState} = useForm();

  const onSubmit=(data: FormInputs) => console.log(data);
  
  React.useEffect(() => {
      console.log("touched", formState.touched);
  }, [formState]);
  // use entire formState object as optional array arg in useEffect, not individual properties of it

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input name="test" ref={register} />
               <input type="submit"/>
            </form>
        </div>
    )
}

export default FormState
