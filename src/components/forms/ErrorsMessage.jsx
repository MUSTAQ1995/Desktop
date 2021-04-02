import React from 'react';
import { useForm } from "react-hook-form";

function ErrorsMessage() {
    // const {register, errors, handleSubmit } = useForm();
    const {register, errors, handleSubmit } = useForm({
        criteriaMode: 'all'
    });
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input name="singleErrorInput" ref={register({ required: true })} />
              {errors.singleErrorInput && "Your input is required"}

              <input
              name="multipleErrorInput"
              ref={register({ required: true, maxLength: 10 })}
               />
               {errors.multipleErrorInput?.type === "required" && "Your input is required"}
               {errors.multipleErrorInput?.type === "maxLength" && "Your input exceed maxlength"}

               <input type="number" name="numberInput" ref={register({ min: 4 })} />
               {errors.numberInput && "Your input required to be more than 4 "}

               <input name="errorMessage" ref={register({ required: "This is required" })} />
               {errors.errorMessage?.message} */}
                 <input 
                  type="password"
                  name="password"
                  ref={register({ required: true, minLength: 10, pattern:/\d+/gi })}
                 />
                 {errors?.password?.types?.required && <p>password is required</p>}
                 {errors?.password?.types?.minLength && <p>atlest 10 digits</p>}
                 {errors?.password?.types?.pattern && <p>only numbers should be there</p>}
               <input type="submit" />
            </form>
        </div>
    )
}

export default ErrorsMessage
