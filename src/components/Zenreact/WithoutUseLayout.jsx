import React, { useEffect, useState } from 'react'

function WithoutUseLayout(props) {
    const [no, setNo] = useState(0);
    useEffect(() => {
        let i;
        // It slowdown execution by running a big loop.so we willl see the change of first
        //state variable becoming 1 and then the random number.
        for(i = 0; i<1000000000; i++){

        }
        if(no === 1)
        setNo(Math.floor(Math.random()*1000));
    }, [no])
    return (
        <div>
            <br/>
            {props.children}
           No Value = {no}  <br/>
           <button onClick={()=>{setNo(1)}} >Set No to Zero</button> 
        </div>
    )
}

export default WithoutUseLayout
