import React from 'react'
import useFrom from './useFrom';
import validationInfo from './validateinfo';
import './Form.css'


function FormSignup(submitForm) {
    const { handleChange, values, handleSubmit , errors} = useFrom(submitForm, validationInfo);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>GEt started</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                       Username:
                    </label>
                    <input 
                    id="username"
                    type="text" name="username" 
                        placeholder=" Enter Your Name" 
                        className="form-input"
                        value={values.username}
                        onChange={handleChange}
                         />
                         {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                       Email:
                    </label>
                    <input
                    id="email"
                    type="email" name="email" 
                        placeholder=" Enter Your Email" 
                        className="form-input"
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                       Password:
                    </label>
                    <input
                    id="password"
                    type="password" name="password" 
                        placeholder=" Enter Your password" 
                        className="form-input" 
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                       Confirm Password:
                    </label>
                    <input
                    id="password2"
                    type="password" name="password2" 
                        placeholder=" Re-Enter Your password" 
                        className="form-input"
                        value={values.password2}
                        onChange={handleChange}
                         />
                         {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login 
                    <a href="#">Here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
