import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count=state.count+5
        },
        decrement:(state)=>{
            state.count=state.count-5
        }
        ,
        incrementByValue:(state,action)=>{
            state.count=state.count+action.payload
        }
        ,
        makeZero:(state,)=>{
            state.count=0
        }
    }
})

export const{increment,decrement,incrementByValue,makeZero}=counterSlice.actions

const counterReducer=counterSlice.reducer

export default counterReducer