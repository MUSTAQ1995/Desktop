import React, { useState} from 'react'
import { decrement, increment, incrementByAmmount, decrementByAmmount } from './Slice';
import { useSelector, useDispatch } from "react-redux";

function Counter() {
    //const [count, setcount] = useState(0)
    //for the redux toolkit purpose we are using the hook called useSelector which brings the state variable
    //form the reducer which we want to use here.
    const {count} = useSelector(state => state.counter);
    //selector is bringing the variable "count" from the action which we have initialized,
    //with the reducer.
    //The above code we can also write it as like this also if we wan't to use:
   // const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch();
    //we can use the dispatch hook to call the action from any of the reducer.
    return (
        <div>
            <h1>Count: {count}</h1>
            {/* In the below line code we are will change that functions with the action which we have defined in our slice file, import the actions now.
           Inorder to call the redux action first we should use the dispatch hook */}
            {/* <button onClick={()=> setcount(count+1)} >Increase</button>
            <button onClick={()=> setcount(count-1)} >Decrease</button> */}
            <button onClick={()=> dispatch(increment())} >Increase</button>
            <button onClick={()=> dispatch(decrement())} >Decrease</button>
            <button onClick={()=> dispatch(incrementByAmmount(5))} >Increase BY 5</button>
            <button onClick={()=> dispatch(decrementByAmmount(5))} >Decrease BY 5</button>
            
           
        </div>
    )
}

export default Counter
