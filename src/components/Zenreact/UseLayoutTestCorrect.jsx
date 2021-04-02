import React, {useState, useLayoutEffect} from 'react'

function UseLayoutTestCorrect() {
    const [no, setNo] = useState(1);
    useLayoutEffect(() => {
        let i;
        for( i = 0; i<100000000; i++){

        }
        if(no === 1)
        setNo(Math.floor(Math.random()*1000))
    }, [no])
    return (
        <div>
          No Value= {no} <br/>
          <button onClick= {()=>{setNo(1)}} >Set No to Zero</button>
        </div>
    )
}

export default UseLayoutTestCorrect
