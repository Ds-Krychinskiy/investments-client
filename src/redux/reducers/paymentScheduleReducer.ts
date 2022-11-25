import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPaymentSchedule } from "../action/bondsAction";
import { PaymentScheduleProps } from "../interface/paymentScheduleInterface";

interface PaymentScheduleState {
  paymentSchedule: PaymentScheduleProps[];
  isLoadingPaymentSchedule: boolean;
  errorLoadingPaymentSchedule: string;
}

const initialState: PaymentScheduleState = {
  paymentSchedule: [],
  isLoadingPaymentSchedule: false,
  errorLoadingPaymentSchedule: "",
};

export const paymentScheduleSlice = createSlice({
  name: "Payment Schedule",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPaymentSchedule.fulfilled.type]: (
      state,
      action: PayloadAction<PaymentScheduleProps[]>
    ) => {
      state.isLoadingPaymentSchedule = false;
      state.errorLoadingPaymentSchedule = "";
      state.paymentSchedule = action.payload;
    },
    [fetchPaymentSchedule.pending.type]: (state) => {
      state.isLoadingPaymentSchedule = true;
    },
    [fetchPaymentSchedule.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingPaymentSchedule = false;
      state.errorLoadingPaymentSchedule = action.payload;
    },
  },
});

export default paymentScheduleSlice.reducer;
