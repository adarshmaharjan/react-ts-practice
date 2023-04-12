import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "../services/pokemon/pokemonService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
