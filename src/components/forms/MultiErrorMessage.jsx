import React from  'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash/fp";


function MultiErrorMessage() {
const { register, errors, handleSubmit } = useForm({
    criteriaMode:"all"
});
const onSubmit = data => console.log(data);

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}> 
                <h1>ErrorMessages</h1>
                <input 
                 name="multipleErrorInput"
                 ref={register({
                     required: 'This Field is Required.',
                     pattern: {
                         value: "/\d+/",
                         message: "This input is number only."
                     },
                     minLength: {
                         value: 11,
                         message: "This input must exceed 10 characters"
                     }
                 })}
                />
                <ErrorMessage 
                 errors={errors}
                 name="multipleErrorInput">
                     {({ messages }) => {
                     console.log("messages", messages);
                      messages &&
                     Object.entries(messages).map(([type, message]) => (
                         <p key={type}>{message}</p>
                     ))
                     
                 }}
                
                 </ErrorMessage>
                
                <input type="submit" />
          </form>            
        </div>
    )
}

export default MultiErrorMessage
