import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchListBondsFromBriefcase } from "../action/briefcaseAction";
import { BondProps } from "../interface/bondInterface";

interface BondsState {
  bonds: BondProps[];
  isLoadingListBondsInBriefcase: boolean;
  errorLoadingListBondsInBriefcase: string;
}

const initialState: BondsState = {
  bonds: [],
  isLoadingListBondsInBriefcase: false,
  errorLoadingListBondsInBriefcase: "",
};

export const bondsListInBriefcaseSlice = createSlice({
  name: "bonds",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListBondsFromBriefcase.fulfilled.type]: (
      state,
      action: PayloadAction<BondProps[]>
    ) => {
      state.isLoadingListBondsInBriefcase = false;
      state.errorLoadingListBondsInBriefcase = "";
      state.bonds = action.payload;
    },
    [fetchListBondsFromBriefcase.pending.type]: (state) => {
      state.isLoadingListBondsInBriefcase = true;
    },
    [fetchListBondsFromBriefcase.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingListBondsInBriefcase = false;
      state.errorLoadingListBondsInBriefcase = action.payload;
    },
  },
});

export default bondsListInBriefcaseSlice.reducer;
