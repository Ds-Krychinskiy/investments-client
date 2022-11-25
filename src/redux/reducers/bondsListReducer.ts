import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchListBonds } from "../action/bondsAction";
import { BondProps } from "../interface/bondInterface";

interface BondState {
  bonds: BondProps[];
  isLoadingListBonds: boolean;
  errorLoadingListBonds: string;
}

const initialState: BondState = {
  bonds: [],
  isLoadingListBonds: false,
  errorLoadingListBonds: "",
};

export const bondSlice = createSlice({
  name: "bonds",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListBonds.fulfilled.type]: (
      state,
      action: PayloadAction<BondProps[]>
    ) => {
      state.isLoadingListBonds = false;
      state.errorLoadingListBonds = "";
      state.bonds = action.payload;
    },
    [fetchListBonds.pending.type]: (state) => {
      state.isLoadingListBonds = true;
    },
    [fetchListBonds.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingListBonds = false;
      state.errorLoadingListBonds = action.payload;
    },
  },
});

export default bondSlice.reducer;
