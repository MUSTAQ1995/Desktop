import React from 'react';
import { useForm } from "react-hook-form";


function CompareField() {
const {register, errors, getValues, handleSubmit } = useForm();

    return (
        <div>
            <h1>Compare Two fields</h1>
            <form onSubmit={handleSubmit(data => console.log(data))}>
            <label>New Password: </label>
            <input 
             name="password"
             ref={register({required: "Password is required!" })}
            />
            {errors.password && (
                <p style={{ color: "black"}}>{errors.password.message}</p>
            )}<br/>
            <label>Confirm Password: </label>
           <input 
            name="passwordConfirmation"
            ref={register({
                required: "Please confirm password!",
                validate: {
                    matchPreviousPassword: value => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                    }
                }
            })}
           />
           {errors.passwordConfirmation && (
               <p style={{ color: "black"}}>
                   {errors.passwordConfirmation.message}
               </p>
           )}<br/>
           <button type="submit">Trigger</button>
            </form>
        </div>
    )
}

export default CompareField
