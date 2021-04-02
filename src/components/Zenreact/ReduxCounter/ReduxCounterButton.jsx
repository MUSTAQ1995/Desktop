import React from 'react';
import { connect } from "react-redux";
import { increase as increaseByReducer, decrease as decreaseByReducer, stepIncrement} from "../actions/Counteractions"

function ReduxCounterButton(props) {
    return (
        <div>
            <button onClick= {props.increase} >Increase</button>
            <button onClick= {props.decrease} >Decrease</button>
            <button onClick= {props.reset} >Reset</button>
        </div>
    )
}

const matchDispatchToProps = (dispatch) => {
    return {
        increase: () => {dispatch(increaseByReducer())},
        decreasr: () => {dispatch(decreaseByReducer())}
    }
}
export default connect(null, matchDispatchToProps) (ReduxCounterButton);
