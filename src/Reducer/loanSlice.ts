/**
 * Created by jindrichdolezal on 04.05.2023
 */
import React from "react";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface LoanSlice {
  loanID: string | null
  userID: string | null;
  userName: string | null;
  userEmail: string | null;
  barrelID: string[] | null;
  pickup: string | null;
  startDate: Date | null;
  endDate: Date | null;
}

const initialState: LoanSlice = {
  loanID: null,
  userID: null,
  userName: null,
  userEmail: null,
  barrelID: null,
  pickup: null,
  startDate: null,
  endDate: null,
}

export const LoanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setLoanID: (state, action: PayloadAction<string>) => {
      state.loanID = action.payload;
    },
    setUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    setBarrelID: (state, action: PayloadAction<string[]>) => {
      state.barrelID = action.payload;
    },
    setPickup: (state, action: PayloadAction<string>) => {
      state.pickup = action.payload;
    },
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date>) => {
      state.endDate = action.payload;
    },
  },
});

export const {setLoanID, setUserID, setUserName, setUserEmail, setBarrelID, setPickup, setStartDate, setEndDate} = LoanSlice.actions;

export const selectLoanID = (state: RootState) => state.loan.loanID;
export const selectUserID = (state: RootState) => state.loan.userID;
export const selectUserName = (state: RootState) => state.loan.userName;
export const selectUserEmail = (state: RootState) => state.loan.userEmail;
export const selectBarrelID = (state: RootState) => state.loan.barrelID;
export const selectPickup = (state: RootState) => state.loan.pickup;
export const selectStartDate = (state: RootState) => state.loan.startDate;
export const selectEndDate = (state: RootState) => state.loan.endDate;

export default LoanSlice.reducer;
