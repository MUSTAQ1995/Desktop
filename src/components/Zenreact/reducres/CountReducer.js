import Store from "../store/store";

let initialState = {count: 0};

function CountReducer(state = initialState, action ) {
    switch(action.type) {
        case "counter/increment":
            console.log("I was called when count increase is called ");
            return { count:  state.count + 1 } 

        case "counter/decrement":
            console.log("I was called to decrease count");
            return { count: state.count - 1 }
        case "counter/stepIncrement":
            return { count: state.count + action.step }
        case "counter/stepDecrement":
            return { count: state.count - action.step } 
        case "counter/loadInitial":
            return {count:action.backendCountValue}   
        default: 
        return state
    }
}

export default CountReducer;