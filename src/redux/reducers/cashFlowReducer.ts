import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCashFlowsOneStock } from "../action/stockAction";
import { CashFlowsProps } from "../interface/cashFlowInterface";

interface CashFlowsState {
  cashFlows: CashFlowsProps[];
  isLoadingCashFlow: boolean;
  errorLoadingCashFlow: string;
}

const initialState: CashFlowsState = {
  cashFlows: [],
  isLoadingCashFlow: false,
  errorLoadingCashFlow: "",
};
export const CashFlowsSlice = createSlice({
  name: "cashFlows",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCashFlowsOneStock.fulfilled.type]: (
      state,
      action: PayloadAction<CashFlowsProps[]>
    ) => {
      state.isLoadingCashFlow = false;
      state.errorLoadingCashFlow = "";
      state.cashFlows = action.payload;
    },
    [fetchCashFlowsOneStock.pending.type]: (state) => {
      state.isLoadingCashFlow = true;
    },
    [fetchCashFlowsOneStock.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingCashFlow = false;
      state.errorLoadingCashFlow = action.payload;
    },
  },
});

export default CashFlowsSlice.reducer;
