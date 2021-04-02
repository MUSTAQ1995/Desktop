import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        //if you have another reducer "user" you can use like this, import it.
        //user: userReducer
    }
});