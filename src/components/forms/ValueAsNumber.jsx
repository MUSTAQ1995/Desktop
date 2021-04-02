import React from 'react';
import { useForm } from "react-hook-form";



function ValueAsNumber() {
const { register, handleSubmit, errors } = useForm()
const onSubmit = (data) => {
    alert(JSON.stringify(data))
};
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text"
              name="myname"
              placeholder="Enyter your Name"
              ref={register({ required: true })}
            
            />    
              {errors.myname && <h4>Name is not Entered</h4>}
            <input 
             name="myage"
             ref={register({ required: true,
                 valueAsNumber:true
             })}
            />{errors.myage && <h4>Age is not entered</h4>}
            <input 
              type="date"
              name="Date"
              placeholder="Enter the date"
             ref={register({
                 valueAsDate: true
             })}
            />
            <input 
              name="words"
              placeholder="write only MUSTAQ"

              ref={register({ required: true,
                  setValueAs:(value) => value === "MUSTAQ"
              })}
            />
            <input type="submit"/>
          </form>  
        </div>
    )
}

export default ValueAsNumber
