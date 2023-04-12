import axios, { AxiosResponse } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { CartItemInterface, CartStateInterface } from "./cartTypes";

const url: string = "https://course-api.com/react-useReducer-cart-project";

const cartInitialState: CartStateInterface = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
  // loading: "idle",
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const resp: AxiosResponse = await axios.get(url);
      return resp.data as CartItemInterface[];
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    clearCart: (state: CartStateInterface) => {
      console.log("clear btn pressed");
      state.cartItems = [];
    },
    removeItem: (state: CartStateInterface, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state: CartStateInterface, action: PayloadAction<string>) => {
      const { payload } = action;
      console.log(payload);
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if (cartItem !== undefined) {
        cartItem.amount += 1;
      }
    },
    decrease: (
      state: CartStateInterface,
      { payload }: PayloadAction<string>
    ) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if (cartItem !== undefined) {
        cartItem.amount -= 1;
      }
    },
    calculateTotal: (state: CartStateInterface) => {
      // let { amount, total } = state;
      let amount: number = 0;
      let total: number = 0;

      state.cartItems.forEach((item: CartItemInterface) => {
        amount += item.amount;
        try {
          total += item.amount * Number(item.price);
        } catch (e) {
          console.log(e);
        } finally {
          total += item.amount;
        }
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state: CartStateInterface) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCartItems.fulfilled,
      (
        state: CartStateInterface,
        { payload }: PayloadAction<CartItemInterface[]>
      ) => {
        console.log(payload);
        state.isLoading = false;
        state.cartItems = payload;
      }
    );
    builder.addCase(
      getCartItems.rejected,
      (state: CartStateInterface, action) => {
        console.log(action);
        state.isLoading = false;
      }
    );
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
// export const selectCartSlice = (state: RootState) => state.cart.;
export default cartSlice.reducer;
