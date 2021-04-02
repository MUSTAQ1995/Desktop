import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    function increase(){
        // setCount= count+2
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("Use Effect is updating")
        document.title = `clicked ${count} times`
        //useEffect runs after every component renders.
    }, [count])
   
    return (
        <div>
            <h1>{count}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <Button variant="contained" color="primary main"  onClick={increase}>Increase</Button>
        </div>
    )
}

export default HookCounterOne
