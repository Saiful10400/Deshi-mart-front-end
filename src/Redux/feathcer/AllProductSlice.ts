import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: { max: 0, min: 0 },
  searchTerm: "",
  category: "",
};

const allProductSlice = createSlice({
  name: "AllProductFilter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    SetPrice: (state, action) => {
      state.price = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    clearState: (state) => {
      state.category = "";
      state.searchTerm = "";
      state.price = { max: 0, min: 0 };
    },
  },
});

export const { setSearchTerm,SetPrice,setCategory,clearState } =
  allProductSlice.actions;
const allproductFilterReducer = allProductSlice.reducer;
export default allproductFilterReducer;
