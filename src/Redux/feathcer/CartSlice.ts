import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface Tinit {
  count: number;
  data: {
    _id: string;
  };
}
const inetialValue: Tinit[] = [];
const Cartslice = createSlice({
  name: "Cart",
  initialState: inetialValue,
  reducers: {
    cartIncrement: (state, actions) => {
      const isExist = state.find(
        (item) => item.data._id === actions.payload.data._id
      );

      if (isExist) {
        toast.error("This Product Is Already Added!", {
          position: "top-center",
        });
        return;
      }
      state.push({ count: actions.payload.count, data: actions.payload.data });
      toast.success("Product Added Successfully !", {
        position: "top-center",
      });
    },
    deleteCart: (state, actions) => {
      return state.filter((item) => item.data._id !== actions.payload.id);
    },
    cartIncrementwithNumber: (state, actions) => {
      const item = state.find((item) => item.data._id === actions.payload.id);
      if (item) {
        if (actions.payload.method === "i") {
          item.count += 1;
        } else {
          if (item.count === 0) return;
          item.count -= 1;
        }
      }
    },
    clearCart: () => {
      return []
    },
  },
});

export const { cartIncrement, cartIncrementwithNumber, deleteCart,clearCart } =
  Cartslice.actions;

const cartReducer = Cartslice.reducer;

export default cartReducer;
