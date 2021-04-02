import React, { useState, useMemo } from 'react';


function UseMemoExample() {
    
//     const [ increment, setIncrement] = useState(0);
//     const [ initialval, setInitialVal] = useState(1);
//     console.log("function called again");
    
//     const complexCalculation = (mul=1) => {
//         console.log((`initial sum value ${mul}`))
//         for(let i=1; i<4; i++){
//             mul= mul*i;
//             console.log("ran")
//         }
//         console.log("mul calculate again = ", mul)
//         return mul;
//     };

//     const increase = () => {
//         setIncrement(increment + 1)
//     }
//     const increaseInitialVal = () => {
//         setInitialVal(initialval+1);
//     }
//     // const optimizedComplexCalculation = complexCalculation((initialval),[initialval])
//     const optimizedComplexCalculation = complexCalculation((initialval))

//     return (
//         <div>
//             <button onClick={increase} >Increment</button>
//             <div>{increment}</div>
//             <button onClick={increaseInitialVal} >Increase initial val</button>
//             <div>initial val : {initialval}</div>
//             <p>value = {optimizedComplexCalculation} </p>
//         </div>
//     )
// }


 
const [ increment, setIncrement] = useState(0);
const [ initialval, setInitialVal] = useState(1);
console.log("function called again");

const complexCalculation = (mul=1) => {
    console.log((`initial sum value ${mul}`))
    for(let i=1; i<4; i++){
        mul= mul*i;
        console.log("ran")
    }
    console.log("mul calculate again = ", mul)
    return mul;
};

const increase = () => {
    setIncrement(increment + 1)
}
const increaseInitialVal = () => {
    setInitialVal(initialval+1);
}
// const optimizedComplexCalculation = complexCalculation((initialval),[initialval])
const optimizedComplexCalculation = useMemo(() => complexCalculation(initialval),[initialval]);

return (
    <div>
        <button onClick={increase} >Increment</button>
        <div>{increment}</div>
        <button onClick={increaseInitialVal} >Increase initial val</button>
        <div>initial val : {initialval}</div>
        <p>value = {optimizedComplexCalculation} </p>
    </div>
)
}

export default UseMemoExample
