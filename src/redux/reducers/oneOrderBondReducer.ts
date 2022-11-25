import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOneOrderByBond } from "../action/suggestedPriceAction";
import { FetchSuggestedPriceBondInterface } from "../interface/suggestedPriceInterface";

interface OneOrderBondState {
  oneOrderBond: FetchSuggestedPriceBondInterface[];
  isLoadingOneOrderBond: boolean;
  errorLoadingOneOrderBond: string;
}

const initialState: OneOrderBondState = {
  oneOrderBond: [],
  isLoadingOneOrderBond: false,
  errorLoadingOneOrderBond: "",
};

export const OneOrderBondSlice = createSlice({
  name: "One Order Bond",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneOrderByBond.fulfilled.type]: (
      state,
      action: PayloadAction<FetchSuggestedPriceBondInterface[]>
    ) => {
      state.isLoadingOneOrderBond = false;
      state.errorLoadingOneOrderBond = "";
      state.oneOrderBond = action.payload;
    },
    [fetchOneOrderByBond.pending.type]: (state) => {
      state.isLoadingOneOrderBond = true;
    },
    [fetchOneOrderByBond.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingOneOrderBond = false;
      state.errorLoadingOneOrderBond = action.payload;
    },
  },
});

export default OneOrderBondSlice.reducer;
