import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loadingStatus:false
}

const loadingSlice=createSlice({
    name:"loadingState",
    initialState,
    reducers:{
        switchLoading:(state)=>{
            if(state.loadingStatus===true){
                state.loadingStatus=false
            }
            else if(state.loadingStatus===false){
                state.loadingStatus=true
            }
        }
    }
})

export const{switchLoading}=loadingSlice.actions
const loadingReducer=loadingSlice.reducer
export default loadingReducer