import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOneStock } from "../action/stockAction";
import { StockProps } from "../interface/stockInterface";

interface StockState {
  stock: StockProps[];
  isLoadingOneStocks: boolean;
  errorLoadingOneStocks: string;
}

const initialState: StockState = {
  stock: [],
  isLoadingOneStocks: false,
  errorLoadingOneStocks: "",
};

export const stockSlice = createSlice({
  name: "one stock",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneStock.fulfilled.type]: (
      state,
      action: PayloadAction<StockProps[]>
    ) => {
      state.isLoadingOneStocks = false;
      state.errorLoadingOneStocks = "";
      state.stock = action.payload;
    },
    [fetchOneStock.pending.type]: (state) => {
      state.isLoadingOneStocks = true;
    },
    [fetchOneStock.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingOneStocks = false;
      state.errorLoadingOneStocks = action.payload;
    },
  },
});

export default stockSlice.reducer;
