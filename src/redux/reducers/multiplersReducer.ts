import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMultipliersOneStock } from "../action/stockAction";
import { MultipliersProps } from "../interface/multipliersInterfcae";

interface MultipliersState {
  multipliers: MultipliersProps[];
  isLoadingMultipliers: boolean;
  errorLoadingMultipliers: string;
}

const initialState: MultipliersState = {
  multipliers: [],
  isLoadingMultipliers: false,
  errorLoadingMultipliers: "",
};

export const MultipliersSlice = createSlice({
  name: "Multipliers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMultipliersOneStock.fulfilled.type]: (
      state,
      action: PayloadAction<MultipliersProps[]>
    ) => {
      state.isLoadingMultipliers = false;
      state.errorLoadingMultipliers = "";
      state.multipliers = action.payload;
    },
    [fetchMultipliersOneStock.pending.type]: (state) => {
      state.isLoadingMultipliers = true;
    },
    [fetchMultipliersOneStock.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingMultipliers = false;
      state.errorLoadingMultipliers = action.payload;
    },
  },
});

export default MultipliersSlice.reducer;
