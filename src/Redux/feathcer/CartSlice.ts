import { createSlice } from "@reduxjs/toolkit";
import notification from "../../Utils/showMessage";

type Tproduct = {
  image: string;
  name: string;
  productId: string;
  categoryref: {
    name: string;
  };
  description: string;
  flashSale: boolean;
  inventoryCount: number;
  price: number;
  _count: {
    review: number;
  };
  created: string; // ISO date string
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

const initialState: { products: Tproduct[] } = {
  products: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setProduct: (state, action: { payload: Tproduct }) => {
      const isExist = state.products.find(
        (item) => item.productId === action.payload.productId
      );

      if (isExist) {
        notification("Product is already exist on cart.", "error");
      } else {
        state.products.push(action.payload);
      }
    },
    clearCart: (state, action) => {
      state.products = [action.payload];
    },
  },
});

export const { setProduct, clearCart } = CartSlice.actions;
const cartReducer = CartSlice.reducer;
export default cartReducer;
