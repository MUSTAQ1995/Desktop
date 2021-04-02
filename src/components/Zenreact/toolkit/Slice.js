import  { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    //The name of the slice is counter, to differentiate between diff reduxstores and diff reducers.
    name:"counter",
    //They defiined the initial state and 
    //Initiallizing the state, and setting all the state variables they have within initial value. 
    initialState: {
        count:0
    },
// obeject called reducers,this is the palce where you will have evringthing that will
//changes the store.
    reducers: {
        increment:(state) => {
          //state.count = state.count + 1;
          state.count += 1;
        },
        decrement: (state) => {
            state.count = state.count - 1
            //state.count -= 1;
        },
        incrementByAmmount: (state, action) => {
            //state.count += action.payload;
            state.count = state.count + action.payload;
            //The payload can be n value or a object in this example we are using it as a value.
        },
        decrementByAmmount: (state, action) => {
            state.count -= action.payload
        }
    }
})
//action creators are generated for each case reducer function.
//You should export all of you actions which you can call the in your react application.
export const { increment, decrement, incrementByAmmount, decrementByAmmount} = counterSlice.actions;
//export the reducers.
export default counterSlice.reducer;