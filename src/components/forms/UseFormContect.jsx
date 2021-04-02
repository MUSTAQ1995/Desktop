import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import Test from "./Test";


function UseFormContect() {
    const methods = useForm();
    const { register, handleSubmit } = methods;

    return (
        <div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(data => console.log(data))}>
                  <label>Test</label>
                <input name="test" ref={register({ required: true })} />
                <label>Nested Input</label>
                <Test />
                <input type="submit" />
              </form>
            </FormProvider>
        </div>
    )
}

export default UseFormContect
