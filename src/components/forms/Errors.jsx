import React from 'react';
import { useForm } from "react-hook-form"


function Errors() {
const { register, handleSubmit, errors } = useForm();
const onSubmit =(data) =>{
    alert(JSON.stringify(data))
};
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input 
                type="text"
                name="myname"
                placeholder="Enter Your Name"
                ref={register({ required: true })}
              />
              {errors.myname && <p>Input is required</p>}
             <label>Error with type check</label>
             <input 
               type="text"
               name="multipleErrors"
               ref={register({ required: true, minLength: 3 })}
             />
               {errors.multipleErrors?.type === "required" && ("Your input is required")}
               {errors.multipleErrors?.type === ("minLength" && "Your input must be greater than 3 characters")}
               <label>Erros with value</label>
               <input 
                type="number"
                name="numberInput"
                ref={register({ min: 2 })}
               />{errors.numberInput && <p>Your input required to be more than 2</p>}
               <input  type="submit" />
          </form>          
        </div>
    )
}

export default Errors
