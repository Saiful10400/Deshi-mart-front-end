import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feathcer/counterSlice";
import { baseApi } from "./api/api";
import DashboardReducer from "./feathcer/DashboardSlice";
import cartReducer from "./feathcer/CartSlice";
import authReducer from "./feathcer/AuthSlice";




const store=configureStore({
    reducer:{
        counterStore:counterReducer,
        cartStore:cartReducer,
        DashbpardStore:DashboardReducer,
        authStore:authReducer,
        [baseApi.reducerPath]:baseApi.reducer,
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store