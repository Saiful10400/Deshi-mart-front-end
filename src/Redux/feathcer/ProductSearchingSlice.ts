import { createSlice } from "@reduxjs/toolkit";

interface tProductSearchPayload {
  searchText: string | undefined;
  brand: string | undefined;
  category: string | undefined;
  priceRange: string | undefined;
  shop: string | undefined;
  flashSale: string | undefined;
}

const initialState: tProductSearchPayload = {
  brand: "",
  category: "",
  flashSale: "",
  priceRange: "",
  searchText: "",
  shop: "",
};

const ProductSearchSlice = createSlice({
  name: "ProductSearch",
  initialState,
  reducers: {
    clearAll: (state) => {
      Object.assign(state, initialState);
    },
    searchByBrand: (state, action) => {
      state.brand = action.payload;
    },
    searchByCategory: (state, action) => {
      state.category = action.payload;
    },
    searchByFlashSale: (state, action) => {
      state.brand = action.payload;
    },
    searchByPriceRange: (state, action) => {
      state.brand = action.payload;
    },
    searchBySearchText: (state, action) => {
      state.searchText = action.payload;
    },
    searchByStore: (state, action) => {
      state.shop = action.payload;
    },
  },
});

export const {
  clearAll,
  searchByBrand,
  searchByCategory,
  searchByFlashSale,
  searchByPriceRange,
  searchBySearchText,
  searchByStore,
} = ProductSearchSlice.actions;
const productSearchReducer = ProductSearchSlice.reducer;
export default productSearchReducer;
