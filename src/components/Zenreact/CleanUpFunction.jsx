import React from 'react'

function CleanUpFunction() {
    const [no, setNo] = React.useState(6);
    const [result, setResult] = React.useState(0);
    React.useEffect(()=>{
        const factorial = (n)=> {
            let result = 1;
            if(n==1)
            return 1
            result = n*factorial(n-1)
            return result;
        }
        setResult(factorial(no));
        const cleanupFunction = () => {
            alert("unmounting components");
        }
        return cleanupFunction;
    }, []);
    React.useEffect(()=>{
        const factorial = (n)=>{
            let result = 1;
            if(n==1)
            return 1
            result = n*factorial(n-1)
            return result;
        }
        setResult(factorial(no))
    }, [no]);

    return (
        <div>
           The factorial = {result}
           <input type = "number" value={no} onChange={(e)=> {
               setNo(e.target.value)
           }} />        
        </div>
    )
}

export default CleanUpFunction
