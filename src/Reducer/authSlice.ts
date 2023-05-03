/**
 * Created by jindrichdolezal on 03.05.2023
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "./store";

interface AuthState {
  token: string | null;
  userId: string | null
}

const initialState: AuthState = {
  token: null,
  userId: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { setToken, clearToken,setId } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUserId = (state: RootState) => state.auth.userId;
export default authSlice.reducer;
