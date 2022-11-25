import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchListStocksFromBriefcase } from "../action/briefcaseAction";
import { StockProps } from "../interface/stockInterface";

interface StocksState {
  stocks: StockProps[];
  isLoadingListStocksInBriefcase: boolean;
  errorLoadingListStocksInBriefcase: string;
}

const initialState: StocksState = {
  stocks: [],
  isLoadingListStocksInBriefcase: false,
  errorLoadingListStocksInBriefcase: "",
};

export const stocksListInBriefcaseSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListStocksFromBriefcase.fulfilled.type]: (
      state,
      action: PayloadAction<StockProps[]>
    ) => {
      state.isLoadingListStocksInBriefcase = false;
      state.errorLoadingListStocksInBriefcase = "";
      state.stocks = action.payload;
    },
    [fetchListStocksFromBriefcase.pending.type]: (state) => {
      state.isLoadingListStocksInBriefcase = true;
    },
    [fetchListStocksFromBriefcase.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingListStocksInBriefcase = false;
      state.errorLoadingListStocksInBriefcase = action.payload;
    },
  },
});

export default stocksListInBriefcaseSlice.reducer;
