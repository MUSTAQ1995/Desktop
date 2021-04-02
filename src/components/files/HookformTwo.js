import React from 'react';
import { useForm } from "react-hook-form";


function HookformTwo() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <input 
           type="text" 
           placeholder="Email" 
           name="email" 
           ref={register}/>
           <input type="password" 
           placeholder="Password" 
           name="password" 
           //required: true, then errors.password && <p>any msg</p>
           ref={register({ required: "Password Required", minLength: { value: 8, message: "Too Short" }})}/>
           {errors.password && <p>{errors.password.message}</p>}
           <input type="submit" />
        </form>
    )
}
export default HookformTwo
