import React, { useEffect} from 'react';
import { useForm } from "react-hook-form";

function AsyncSetFormValues() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data))
    };
    useEffect(() =>{
        // you can do async server request and fill up form.
        setTimeout(() =>{
            reset({
                firstName: "bill",
                lastName: "luo"
            });
        }, 5000);
    }, [reset])
    return (
        <div>
            <h3>Async Set Form Values</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name</label>
              <input name="firstName" ref={register} />

              <label>Last Name</label>
              <input name="lastName" ref={register} />
              <input type="submit" />
            </form>
        </div>
    )
}

export default AsyncSetFormValues
