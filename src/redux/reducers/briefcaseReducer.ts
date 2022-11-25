import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBriefcaseUser } from "../action/briefcaseAction";
import { BriefcaseProps } from "../interface/briefcaseInterface";

interface BriefcaseState {
  briefcase: BriefcaseProps[];
  isLoadingBriefcase: boolean;
  errorLoadingBriefcase: string;
}

const initialState: BriefcaseState = {
  briefcase: [],
  isLoadingBriefcase: false,
  errorLoadingBriefcase: "",
};

export const BriefcaseSlice = createSlice({
  name: "briefcase",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBriefcaseUser.fulfilled.type]: (
      state,
      action: PayloadAction<BriefcaseProps[]>
    ) => {
      state.isLoadingBriefcase = false;
      state.errorLoadingBriefcase = "";
      state.briefcase = action.payload;
    },
    [fetchBriefcaseUser.pending.type]: (state) => {
      state.isLoadingBriefcase = true;
    },
    [fetchBriefcaseUser.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingBriefcase = false;
      state.errorLoadingBriefcase = action.payload;
    },
  },
});

export default BriefcaseSlice.reducer;
