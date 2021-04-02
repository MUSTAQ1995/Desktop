import React from 'react'
import { useForm } from "react-hook-form";

function HookformEight() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit= ((data) => {
        console.log(data)
    });
    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                console.log("data")
            })}>
                <input 
                type="text" 
                label="Username" 
                name="username" 
                placeholder="Enter your Username"
                />

                <input 
                type="password"
                name="password"
                label="Password"
                placeholder="Enter the password"
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default HookformEight
