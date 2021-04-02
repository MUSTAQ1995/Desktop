import React, { useState } from "react";


 const CounterMiddleware = () => {
     const [state, setstate] = useState(0)
     return (
        <div>
            <h2>The Count Value : {state}</h2>
            <button onClick={() => setstate(state+1)} >Increase</button>
            <button onClick={() => setstate(state-1)} >Decrease</button>
        </div>
     )

}


export default CounterMiddleware;
