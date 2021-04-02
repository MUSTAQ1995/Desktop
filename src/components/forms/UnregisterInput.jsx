import React from 'react';
import { useForm } from "react-hook-form";

function UnregisterInput() {
    const { register, handleSubmit, unregister } = useForm()
    const onSubmit=(data) => {
        alert(JSON.stringify(data));

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
             <label>First Name</label>
             <input
              type="text"
              name="fname"
              placeholder="Enetre Your first name"
              ref={register}
             />
             <label>Last Name</label>
             <input 
              type="text"
              name="lname"
              placeholder="Enter your last Name"
              ref={register}
             />
           <button 
            type="button"
               onClick={()=>{
                   unregister("fname");
               }}>
               Unregister Input fname
           </button>
           <input 
            type="submit"
           />
            </form>
        </div>
    )
}

export default UnregisterInput
