import { functionsIn } from 'lodash';
import React,{useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            {/* <span className="close-btn">X</span>
            <div><h1>Accepted</h1></div>
            {!isSubmitted ? <FormSignup submitForm={submitForm}/>:<FormSuccess/>}  */}
           <FormSignup/>
        </div>
        </>
    )
}

export default Form;
