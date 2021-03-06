import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)
    function increase(){
        setCount(count+1);
    };
function decrease(){
    setCount(count-1)
}
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Count
