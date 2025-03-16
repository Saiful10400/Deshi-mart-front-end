import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import authReducer from "./feathcer/AuthSlice";
import loadingReducer from "./feathcer/loadingSlice";
import cartReducer from "./feathcer/CartSlice";
import filterReducer from "./feathcer/FilterSlice";
import allproductFilterReducer from "./feathcer/AllProductSlice";
import productSearchReducer from "./feathcer/ProductSearchingSlice";

const store = configureStore({
  reducer: {
    allProductSearch: productSearchReducer,
    loadingStore: loadingReducer,
    authStore: authReducer,
    cartStore: cartReducer,
    filterStore: filterReducer,
    allProductFilterStore: allproductFilterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
