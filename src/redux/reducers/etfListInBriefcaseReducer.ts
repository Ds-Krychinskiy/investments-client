import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchListEtfsFromBriefcase } from "../action/briefcaseAction";
import { BondProps } from "../interface/bondInterface";

interface EtfState {
  etf: BondProps[];
  isLoadingListEtf: boolean;
  errorLoadingListEtf: string;
}

const initialState: EtfState = {
  etf: [],
  isLoadingListEtf: false,
  errorLoadingListEtf: "",
};

export const etfListInBriefcaseSlice = createSlice({
  name: "etf",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListEtfsFromBriefcase.fulfilled.type]: (
      state,
      action: PayloadAction<BondProps[]>
    ) => {
      state.isLoadingListEtf = false;
      state.errorLoadingListEtf = "";
      state.etf = action.payload;
    },
    [fetchListEtfsFromBriefcase.pending.type]: (state) => {
      state.isLoadingListEtf = true;
    },
    [fetchListEtfsFromBriefcase.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingListEtf = false;
      state.errorLoadingListEtf = action.payload;
    },
  },
});

export default etfListInBriefcaseSlice.reducer;
