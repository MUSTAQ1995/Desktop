import { createStore, applyMiddleware } from "redux";
import CountReducer from  "../reducres/CountReducer";
import thunk from "redux-thunk";

let Store = createStore(CountReducer, applyMiddleware(thunk));

export default Store;
// store is a collection which can give you the data whenver you need buy
//calling store.getState, It also accepts