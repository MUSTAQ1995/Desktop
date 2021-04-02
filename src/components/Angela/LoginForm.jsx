import React, { useState } from 'react'


function LoginForm() {
    const [headingText, setHeadingText] = useState("Nothing");
    const [ isMouseOver,  setMouseOver ] = useState(false)

    function handleClick() {
        setHeadingText("Submitted")
    }
    function handleMouseOver(){
      setMouseOver(true)
    }
    function handleMouseOut(){
        setMouseOver(false)
    }
    return (
        <div>
            <h1>{headingText}</h1>
            <input type="text" placeholder="Enter your Name" />
            <button 
              style={{ backgroundColor: isMouseOver ? "black": 'green'}}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    )
}

export default LoginForm
