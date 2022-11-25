import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchListStocks } from "../action/stockAction";
import { StockProps } from "../interface/stockInterface";

interface StocksState {
  stocks: StockProps[];
  isLoadingListStokcs: boolean;
  errorLoadingListStokcs: string;
}

const initialState: StocksState = {
  stocks: [],
  isLoadingListStokcs: false,
  errorLoadingListStokcs: "",
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListStocks.fulfilled.type]: (
      state,
      action: PayloadAction<StockProps[]>
    ) => {
      state.isLoadingListStokcs = false;
      state.errorLoadingListStokcs = "";
      state.stocks = action.payload;
    },
    [fetchListStocks.pending.type]: (state) => {
      state.isLoadingListStokcs = true;
    },
    [fetchListStocks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingListStokcs = false;
      state.errorLoadingListStokcs = action.payload;
    },
  },
});

export default stocksSlice.reducer;
