import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: { max: 0, min: 0 },
  searchTerm: "",
  category: "",
};

const filterSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addPrice: (state, action) => {
      state.price = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },

    clearState: (state) => {
      state.category = "";
      state.searchTerm = "";
      state.price = { max: 0, min: 0 };
    },
  },
});

export const { addSearchTerm, addPrice, addCategory, clearState } =
  filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;
