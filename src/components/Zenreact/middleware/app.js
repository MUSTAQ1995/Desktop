import React from 'react'
import CounterMiddleware from './CounterMiddleware';
import { Provider } from "react-redux";
import { createStore } from "redux";

function app() {
    return (
        <div>
            <CounterMiddleware/>
        </div>
    )
}

export default app
