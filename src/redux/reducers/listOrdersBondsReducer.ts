import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOneOrderByBond } from "../action/suggestedPriceAction";
import { FetchSuggestedPriceBondInterface } from "../interface/suggestedPriceInterface";

interface OrdersStocksState {
  listOrdersBonds: FetchSuggestedPriceBondInterface[];
  isLoadingListOrderBonds: boolean;
  errorLoadingListOrderBonds: string;
}

const initialState: OrdersStocksState = {
  listOrdersBonds: [],
  isLoadingListOrderBonds: false,
  errorLoadingListOrderBonds: "",
};

export const OrdersBondsSlice = createSlice({
  name: "Orders Bonds",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneOrderByBond.fulfilled.type]: (
      state,
      action: PayloadAction<FetchSuggestedPriceBondInterface[]>
    ) => {
      state.isLoadingListOrderBonds = false;
      state.errorLoadingListOrderBonds = "";
      state.listOrdersBonds = action.payload;
    },
    [fetchOneOrderByBond.pending.type]: (state) => {
      state.isLoadingListOrderBonds = true;
    },
    [fetchOneOrderByBond.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingListOrderBonds = false;
      state.errorLoadingListOrderBonds = action.payload;
    },
  },
});

export default OrdersBondsSlice.reducer;
