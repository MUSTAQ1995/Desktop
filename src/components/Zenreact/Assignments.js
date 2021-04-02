import React from 'react'

function Assignments() {

    function showRes(){
        let str = "Bangalore is the silicon valley of india";
        alert(`the given string is "${str}"`)
        let res = str.replaceAll(" ",'').length;
        alert(`the length of string is ${res}`)
    }
    return (
        <div>
                <button onClick={showRes}>show length</button>
        </div>
    )
}

export default Assignments
