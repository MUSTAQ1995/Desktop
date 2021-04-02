import axios from "axios";

function loadInitialCount(){
    return(dispatch) => {
        axios.get("/count.json")
        .then((res) => {
            console.log(res);
            return dispatch({ type: "counter/loadInitial",backendCountValue:res.data.count})
        })
    }

}

function increase() {
    return { type: "counter/increment" };
}
function decrease() {
    return { type: "counter/decrement" };
}
function stepIncrement(step) {
    return { type: "counter/stepIncrement", step:step}
}
function stepDecrement(step) {
    return { type: "counter/stepDecrement", step:step}
}
function asyncDecrease(step=30){
    return(dispatch)  => {
        return  setTimeout(() => {
            return dispatch ({ type: "Counter/stepDecrement", step:step})
        }, 3000);
    }
  
}
export { increase, decrease, stepIncrement, loadInitialCount, stepDecrement, asyncDecrease };