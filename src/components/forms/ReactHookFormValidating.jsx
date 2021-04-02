import React from 'react';
import { useForm } from "react-hook-form";

function ReactHookFormValidating() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text"
              name="anyname"
              placeholder="Just Enter your name"
              ref={register({ required: true, maxLength: "5" })}
            />
              {errors.anyname && <span>Name is required Field</span>}
              <input 
                type="text"
                name="justname"
                placeholder="Enter just the name"
                ref={register ({ required: true, minLength: "3", pattern: /^[A-Za-z]+$/i})}
              /><br/>
              {errors.justname && <span>The just name should only alphabets</span>}
              <input 
                type="number"
                name="age"
                ref={register({ min: 10, max: 20 })}
              />
              <br/>
              <input type="submit" />
        </form>
    )
}

export default ReactHookFormValidating
