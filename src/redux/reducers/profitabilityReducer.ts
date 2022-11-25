import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfitabilitiesOneStock } from "../action/stockAction";
import { ProfitabilityProps } from "../interface/profitabilityInterface";

interface ProfitabilityState {
  profitability: ProfitabilityProps[];
  isLoadingProfitability: boolean;
  errorLoadingProfitability: string;
}

const initialState: ProfitabilityState = {
  profitability: [],
  isLoadingProfitability: false,
  errorLoadingProfitability: "",
};

export const profitabilitySlice = createSlice({
  name: "profitability",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfitabilitiesOneStock.fulfilled.type]: (
      state,
      action: PayloadAction<ProfitabilityProps[]>
    ) => {
      state.isLoadingProfitability = false;
      state.errorLoadingProfitability = "";
      state.profitability = action.payload;
    },
    [fetchProfitabilitiesOneStock.pending.type]: (state) => {
      state.isLoadingProfitability = true;
    },
    [fetchProfitabilitiesOneStock.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingProfitability = false;
      state.errorLoadingProfitability = action.payload;
    },
  },
});

export default profitabilitySlice.reducer;
