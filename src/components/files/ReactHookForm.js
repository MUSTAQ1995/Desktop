import React from 'react';
import { useForm } from "react-hook-form";

function ReactHookForm() {
    const {register, errors, handleSubmit} = useForm();
    const onSubmit =((data)=>{
        console.log(data)
    })
    return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <input type="email" name="email" ref={register({ required: true})} placeholder="Enter your Email"/>
           {errors.email && <p>Email is required</p>}
           <input 
           type="password" 
           ref={register({ required: "PassWord is required", minLength: { value: 8, message: "Too Short"}})} 
           placeholder="Password" name="password"/>
           {errors.password && <p>{errors.password.message}</p>}
           <input type="submit" />
       </form>
    )
}

export default ReactHookForm;
