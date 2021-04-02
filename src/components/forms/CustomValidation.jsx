import React from 'react';
import { useForm } from "react-hook-form";


function CustomValidation() {
const {register, handleSubmit, errors } = useForm()
const onSubmit =(data) => alert(JSON.stringify(data));
const initialValues = {
  firstName: "MSK",
  lastName: 'AK',
  email:"fale@gmail.com",
  age:"-5"
};
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <label htmlFor="firstName">First Name</label>
             <input 
               defaultValue={initialValues.firstName}
               name="firstName"
               placeholder="bill"
               ref={register({
                   validate: value => value !== "MSK"
               })}
             />
             {errors.firstName && <p>your name is not MSK </p>}
             <label htmlFor="lastName">Last Name</label>
             <input
               defaultValue={initialValues.lastName}
               name="lastName"
               placeholder="AK"
               ref={register({
                   validate: value => value.length > 3
               })}
             />
             {errors.lastName && <p>Your last name should not be less than 3 characters</p>}
             
             <label htmlFor="email">Email</label>
             <input 
               defaultValue={initialValues.email}
               name="email"
               placeholder="ENter your email address"
               type="email"
               ref={register}
             />
             <label htmlFor="age">Age</label>
             <input 
               defaultValue={initialValues.age}
               name="age"
               placeholder="0"
               type="text"
               ref={register({
                   validate: {
                       positiveNumber: value => parseFloat(value) > 0,
                       lessThanHundred: value => parseFloat(value) < 200
                   }
               })}
             />
             {errors.age && errors.age.type === "positiveNumber" && (
                 <p>Your Age is invalid</p>
             )}
             {errors.age && errors.age.type === "lessThanHundred" && (
                 <p>Your age should be greater than 200</p>
             )}
             <input type="submit" />
          </form>          
        </div>
    )
}

export default CustomValidation
