import React from 'react';
import  content  from "./statics";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username:yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().required().email(),
});

function HookformSeven() {
    const {register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);
    console.log(errors)
    return (
        <div className="app">
            <h1>React-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input,key)=>{
                    return (
                        <div key={key}>
                            <p>
                                <label className="label">{input.label}</label>
                            </p>
                            <p>
                                <input 
                                name={input.name} 
                                className="input" 
                                type={input.type}
                                ref={register}/> 
                            </p>
                            <p>{errors[input.name]?.message}</p>
                        </div>
                    )
                })}       
                <button className="btn">Submit</button>         
            </form>
        </div>
    )
}

export default HookformSeven
