import React from 'react'
import Login from './Login'

var isLoggedIn = true;

// function renderConditionally() {
//     if (isLoggedIn === true) {
//         return <h1>Hello Bro</h1>
//     } else {
//         return <Login />
//     }
// }

function LoginMain() {
    return (
        <div>
            {/* {renderConditionally()} */}
           {isLoggedIn?<Login isRegistered={isLoggedIn}/>:<h1>Hello Brother</h1>}
           {/* {isLoggedIn === true ?<Login/>:<h1>Hello Brother</h1>} */}
           {/* {isLoggedIn ?<Login/>:""} "To show none"*/}
           {/* {isLoggedIn === true && <Login />} */}
        </div>
    )
}

export default LoginMain
