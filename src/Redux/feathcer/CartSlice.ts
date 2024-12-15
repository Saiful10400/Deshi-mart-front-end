import { createSlice, current } from "@reduxjs/toolkit";
import { Flag } from "lucide-react";
import Swal from "sweetalert2";
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
      state.products.push(action.payload);
    },
    clearCart: (state,action) => {
      state.products=[action.payload]
    },
  },
});

export const { setProduct,clearCart } = CartSlice.actions;
const cartReducer = CartSlice.reducer;
export default cartReducer;
