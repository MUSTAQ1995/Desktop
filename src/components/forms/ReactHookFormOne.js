import React from 'react';
import { useForm } from "react-hook-form";



function ReactHookFormOne() {
    const { register, handleSubmit,watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        console.log(watch("somthing"))
        //Watch input value by passing thename of it.
    }
    return (
        <div>
            {/* handleSubmit will validate our inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* registering the input into the hook by invoking the "register" function */}
             <input 
               type="text" 
               name="somthing" 
               placeholder="Enter Your name"  
               ref={register ({ required: true })}  
            />
            {/* including the validation with required or other standard HTLM validation rules */}
            <input 
              type="number"
              name="anynumber"
              placeholder="Enter any number"
              ref={register}
            />
            {/* errors will return when field validation fails */}
            {errors.somthing && <span>This name field is needed </span>}
            <button
             type="submit"
            >Just Submit
            </button>
            </form>
        </div>
    )
}

export default ReactHookFormOne;
