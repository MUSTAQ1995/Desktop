import React, { useRef } from 'react';

function UseRefHook() {
    const refObject = useRef("null");
    const buttonObject = useRef(null);
    const ShowName = () => {
        console.log(refObject.current);
        alert(refObject.current.value);
    }
    const attachEvent = () => {
        buttonObject.current.addEventListener("click", clickFunc);
    }
    const clickFunc = () => {
        alert(refObject.current.value);
    }
    return (
        <div>
            <input type="text" name="name" ref={refObject} /><br/>
            <button onClick={ShowName}> Show Value</button>
            <button onClick={attachEvent} >Attach Event</button>
            <button ref={buttonObject} >Show Value refbutton</button>
        </div>
    )
}

export default UseRefHook;