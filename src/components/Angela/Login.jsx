import React from 'react'
import Input from './Input'


function Login(props) {
    return (
        <div>
            <form className="form" >
             <Input
              type="text"
              placeholder="UserName"
             />
             <Input
              type="password"
              placeholder="Password"
             />
             <button type="submit" >{props.isRegistered?  "Registered":"Login" }</button>
            </form>
        </div>
    )
}

export default Login
