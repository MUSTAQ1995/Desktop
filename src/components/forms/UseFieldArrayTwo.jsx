import React from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";


function UseFieldArrayTwo() {
const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
});
const { fields, append, preoend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'text'
});


    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))}>
              <ul>
                  {fields.map((item, index) => (
                      <li key={item.id}>
                         <input 
                          name={`test[${index}].firstName`}
                          ref={register()}
                          defaultValue={item.firstName} // make sure to set up defaultValue
                         />
                         <Controller 
                           as={<input />}
                           name={`test[${index}].lastName`}
                           control={control}
                           defaultValue={item.lastName} //make sure to set up dafaultValue
                         />
                         <button type="button" onClick={() => remove(index)} >Delete</button>
                      </li>
                  ))
                  }
              </ul>
              <button
                type="button"
                onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
              >
                append
              </button>
              <input type="submit"/>
            </form>
        </div>
    )
}

export default UseFieldArrayTwo
