import React from 'react';
import { useForm } from "react-hook-form";


function DirtyTouched() {
const { register, handleSubmit, formState } = useForm({
    mode: "onChange"
});
const onSubmit = data => {
    alert(JSON.stringify(data))
};
//make sure to read state before render to subscribe to the state update (Proxy).
const { dirtyFields } = formState;

//check your dev console, it's a set
console.log(dirtyFields);
    return (
        <div>
            <h1>Dirty Touched</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name</label>
              <input type="text" name="First name" ref={register({ required: true })} />

              <label>Last Name</label>
              <input type="text" name="Last name" ref={register} />

              <label>Email</label>
              <input type="text" name="Email" ref={register} />

              <label>Title</label>
              <select name="Title" ref={register}>
                   <option value="Mr">Mr</option>
                   <option value="Mrs">Mrs</option>
                   <option value="Miss">Miss</option>
                   <option value="Dr">Dr</option>
              </select>
              <label>Are you a developer?</label>
              <input name="developer" type="radio" value="Yes" ref={register} />
              <input name="developer" type="radio" value="No" ref={register} />
              <per>{JSON.stringify(formState, null, 2)}</per>
              <input type="submit" />
            </form>
        </div>
    )
}

export default DirtyTouched
