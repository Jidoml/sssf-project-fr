/**
 * Created by jindrichdolezal on 03.05.2023
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "./store";

interface CartState {
  barrelId: string[] | null;
}

const initialState: CartState = {
  barrelId: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setBarrelId: (state, action: PayloadAction<string[]>) => {
      state.barrelId = action.payload;
    },
    clearBarrelId: (state) => {
      state.barrelId = null;
    },
    addBarrelId: (state, action: PayloadAction<string>) => {
      if (state.barrelId) {
        if (!state.barrelId.includes(action.payload)) {
          state.barrelId.push(action.payload);
        }
      } else {
        state.barrelId = [action.payload];
      }
    },
  },
});

export const { setBarrelId, clearBarrelId, addBarrelId } = cartSlice.actions;

export const selectBarrelIds = (state: RootState) => state.cart.barrelId;

export default cartSlice.reducer;
