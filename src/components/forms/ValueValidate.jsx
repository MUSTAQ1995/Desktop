import React from 'react';
import { useForm } from "react-hook-form";



function ValueValidate() {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) => {
    console.log(data)
    alert(JSON.stringify(data))
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
                type="text"
                name="myname"
                placeholder="Enter your Name"
                ref={register({ 
                    required: true,
                    validate: (value) => value === "b"
                 })}
               />
               <input
                type="number"
                name="myage"
                placeholder="Enter Your Age"
                ref={register({ 
                    required: true,
                    validate: {
                        positive: (value) => parseInt(value, 10) > 0,
                        lessThanTen: (value) => parseInt(value, 10) < 10,
                        notFive: (value) => parseInt(value, 10) !==5
                    } 
                })}
               />
               {errors.myname && <p>That is not the a!</p>} 
               {errors.myage && <h3>Your Age is needed</h3>} 
               <input type="submit" />
            
            </form>
        </div>
    )
}

export default ValueValidate
