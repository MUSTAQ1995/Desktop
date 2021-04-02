import React from 'react';
import { useForm } from "react-hook-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function AsynchSubmitValidation() {
    const { register, handleSubmit, errors, formState } = useForm();
    const onSubmit = async data => {
        await sleep(3000);
        if (data.usename === "bill") {
            alert(JSON.stringify(data))
        } else {
            alert(" There is an error");
        }
    };
    console.log(errors)
    console.log(formState)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Asynch Submit Validation</h1>
              <label htmlFor="username"> User Name</label>
              <input name="username" placeholder="Bill" ref={register} />

              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" placeholder='Luo' ref={register} />

              <label htmlFor="email" >Email</label>
              <input name="email" placeholder="blue@gmail.com"
              type="text"
              ref={register} />
              <div style={{ color: "red" }}>
                 {Object.keys(errors).length > 0 && "There are errors, check your console."}
              </div>
              <input type="submit" />
            </form>
        </div>
    )
}

export default AsynchSubmitValidation
