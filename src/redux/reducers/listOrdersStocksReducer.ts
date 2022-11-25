import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSuggestedPriceStocks } from "../action/suggestedPriceAction";
import { FetchSuggestedPriceStockInterface } from "../interface/suggestedPriceInterface";

interface OrdersStocksState {
  listOrdersStocks: FetchSuggestedPriceStockInterface[];
  isLoadingListOrderStocks: boolean;
  errorLoadingListOrderStocks: string;
}

const initialState: OrdersStocksState = {
  listOrdersStocks: [],
  isLoadingListOrderStocks: false,
  errorLoadingListOrderStocks: "",
};

export const OrdersStocksSlice = createSlice({
  name: "Orders Stocks",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSuggestedPriceStocks.fulfilled.type]: (
      state,
      action: PayloadAction<FetchSuggestedPriceStockInterface[]>
    ) => {
      state.isLoadingListOrderStocks = false;
      state.errorLoadingListOrderStocks = "";
      state.listOrdersStocks = action.payload;
    },
    [fetchSuggestedPriceStocks.pending.type]: (state) => {
      state.isLoadingListOrderStocks = true;
    },
    [fetchSuggestedPriceStocks.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingListOrderStocks = false;
      state.errorLoadingListOrderStocks = action.payload;
    },
  },
});

export default OrdersStocksSlice.reducer;
