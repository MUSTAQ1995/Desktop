import React, { useState } from 'react'
import Store from "./store/store";
import store from "./toolkit/store";
import { increase, stepIncrement, loadInitialCount } from "./actions/Counteractions";
import Context from './Context';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import AddMovies from './AddMovies';
import CleanUpFunction from './CleanUpFunction';
import CounterMemo from './CounterMemo';
import CleanUpExample from './CleanUpExample';
import WeatherApp from '../WeatherApp/WeatherApp';
import WithoutUseLayout from './WithoutUseLayout';
import UseLayoutTestCorrect from './UseLayoutTestCorrect';
import UseRefHook from './UseRefHook';
import UseContext from './UseContext';
import CounterClass from './CounterClass';
import UseMemoExample from './UseMemoExample';
import MuiText from './MuiText';
import Counter from './toolkit/Counter';
import { Provider } from "react-redux"
import CounterMiddleware from './middleware/CounterMiddleware';




Store.subscribe(function() {
  console.log(Store.getState());
})

Store.dispatch( increase() );
Store.dispatch( increase() );
Store.dispatch( stepIncrement(6) );

function ReactApp() {
  const [showComponent,  setShowComponent] = useState(0);
    return (
 
       
        <div>
         {/* <CounterClass/>
        <UseMemoExample/>
        <MuiText/> */}
        {/* 
        This provider is used for the redux-toolkit 
        <Provider store={store}>
          <Counter/>
        </Provider> */}
        <CounterMiddleware/>
          {/* <CleanUpExample show={showComponent}/>
          {
            showComponent && <CleanUpExample/>
          } */}
          {/* <WithoutUseLayout><h1>this will be async ui change.</h1></WithoutUseLayout><br/>
          <UseLayoutTestCorrect/>
          <UseRefHook/> */}
        {/* <select onChange={(e)=>{setShowComponent(e.target.value)}} >
          <option value="1" > show</option>
          <option value="0" > hide</option>
        </select>
        select Value = {showComponent}
        {showComponent == 1 ? (<CleanUpExample/> ) : "component removed"} */}
        
        </div>
    
        
    )
}

export default ReactApp
