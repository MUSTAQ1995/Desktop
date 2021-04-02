import React from 'react';
import { useForm } from "react-hook-form";

function HookfromOne() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" ref={register}/>
                <input name="eampleRequired" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default HookfromOne;
