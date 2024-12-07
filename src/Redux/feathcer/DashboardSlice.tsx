import { createSlice } from "@reduxjs/toolkit";
const initialState={
    assignedUpdateRoom:{},
    updateing:true
}
const DashboardSlice=createSlice({
    initialState,
    name:"dashboard",
    reducers:{
        setUpdateItem:(state,action)=>{
            state.assignedUpdateRoom=action.payload
        },
        UpdateFired:(state)=>{
            state.updateing=!state.updateing
        }
    }
})


const DashboardReducer=DashboardSlice.reducer
export const{setUpdateItem,UpdateFired}=DashboardSlice.actions
export default DashboardReducer