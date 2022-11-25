import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOneOrderByStock } from "../action/suggestedPriceAction";
import { FetchSuggestedPriceStockInterface } from "../interface/suggestedPriceInterface";

interface OneOrderStockState {
  oneOrderStock: FetchSuggestedPriceStockInterface[];
  isLoadingOneOrderStock: boolean;
  errorLoadingOneOrderStock: string;
}

const initialState: OneOrderStockState = {
  oneOrderStock: [],
  isLoadingOneOrderStock: false,
  errorLoadingOneOrderStock: "",
};

export const OneOrderStockSlice = createSlice({
  name: "One Order Stock",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneOrderByStock.fulfilled.type]: (
      state,
      action: PayloadAction<FetchSuggestedPriceStockInterface[]>
    ) => {
      state.isLoadingOneOrderStock = false;
      state.errorLoadingOneOrderStock = "";
      state.oneOrderStock = action.payload;
    },
    [fetchOneOrderByStock.pending.type]: (state) => {
      state.isLoadingOneOrderStock = true;
    },
    [fetchOneOrderByStock.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingOneOrderStock = false;
      state.errorLoadingOneOrderStock = action.payload;
    },
  },
});

export default OneOrderStockSlice.reducer;
