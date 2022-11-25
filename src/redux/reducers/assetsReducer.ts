import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAssetsOneStock } from "../action/stockAction";
import { AssectProps } from "../interface/assectInterface";

interface AssetsState {
  assets: AssectProps[];
  isLoadingAssets: boolean;
  errorLoadingAssets: string;
}

const initialState: AssetsState = {
  assets: [],
  isLoadingAssets: false,
  errorLoadingAssets: "",
};

export const AssetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAssetsOneStock.fulfilled.type]: (
      state,
      action: PayloadAction<AssectProps[]>
    ) => {
      state.isLoadingAssets = false;
      state.errorLoadingAssets = "";
      state.assets = action.payload;
    },
    [fetchAssetsOneStock.pending.type]: (state) => {
      state.isLoadingAssets = true;
    },
    [fetchAssetsOneStock.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingAssets = false;
      state.errorLoadingAssets = action.payload;
    },
  },
});

export default AssetsSlice.reducer;
