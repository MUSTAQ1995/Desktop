import React from 'react'
import { useForm } from "react-hook-form";


function Hookformfour() {
    const { register } = useForm();
    return (
        <div>
            <form>
                <input  name="firstName" ref={register} />
                <select name="gender" ref={register} >
                   <option value="female">female</option>
                   <option value="male">male</option>
                   <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>            
        </div>

)
}

export default Hookformfour;
            