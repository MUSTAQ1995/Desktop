import React from 'react'

function Form(props) {
    return (
        <div>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="Password" />
            {props.isRegistered === false && (
                <input type="password" placeholder="Confirm Password" />
            )}
             {/* {props.isRegistered === false ?
                <input type="password" placeholder="Confirm Password" />
            : ''} */}
            
            <button type="submit" >
                {props.isRegistered ? "Login" : "Register"}</button>
        </div>
    )
}

export default Form
