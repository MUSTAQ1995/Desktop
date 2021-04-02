import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function HookformThree() {
    const {register, handleSubmit, errors } = useForm({});
   
    

    function onSubmit(formData) {
      console.log(formData) 
    }
    console.log(errors)

    return (
        <div>
            <h1>React-hook-form</h1>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <label>User Name</label>
                <input type="text" name="username"  ref={register({ required: true, minLength:3 })} />
                {errors.username && <p>Username is inavalid</p>}
                <label>Age</label>
                <input Type="number" name="age"   ref={register}/>

                <span>
                    <input type="checkbox" name="remember"  ref={register}/>
                    <label>Remember Me</label>
                </span>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HookformThree
