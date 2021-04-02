import React, { useState } from 'react';
import { connect } from "react-redux";
import ReduxCounterForm from "./ReduxCounterForm";
import ReduxCounterButton from "./ReduxCounterButton";
import { reduceRight } from 'lodash';
import { increase as increaseByReducer, decrease as decreaseByReducer, loadInitialCount, stepIncrement, asyncDecrease} from "../actions/Counteractions"


function ReduxCounter(props) {
    const [step, setStep] = useState("0")
    function increase(){
        // props.dispatch({ type: "counter/stepIncrement", step:parseInt(step)})
        // props.dispatch(stepIncrement(parseInt(step)));
        props.stepInc(step)
            props.hi();
        }
    
    function decrease(){
        // props.dispatch({ type: "counter/stepDecrement", step:parseInt(step) })
        props.dispatch(decreaseByReducer());
    }
    function reset(){

    }
    function submitForm(e) {
        e.preventDefault()
        console.log(e);
        let formTagObject = e.target;
        let inputNameObject = formTagObject.title;
    }
    function aDecrease(){
      props.asyncDecrease();
    }

    return (
        <div>
            Count={props.count} <br/>
            Step = {step} <br/>
            <input type="number" value={step} onChange={e => setStep(e.target.value)} />
            <ReduxCounterButton increase = {increase} decrease={decrease} reset={reset} />
            <ReduxCounterForm avinash= {submitForm} />
            <button onClick={aDecrease} >Async Decrease</button>
            <button onClick={loadInitialCount} >Load Initial Value</button>
        </div>
    )
}

const mapStateToProps = function(state){
    return{...state}
}
const mapDispatchToProps = function(dispatch){
    return {
        increase: () => dispatch(increaseByReducer()),
        decrease: () => dispatch(decreaseByReducer()),
        stepInc : (step) => dispatch(stepIncrement(parseInt(step))),
        hi:sayHi
    };
    function sayHi() {
        alert("Trying to display something")
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);
