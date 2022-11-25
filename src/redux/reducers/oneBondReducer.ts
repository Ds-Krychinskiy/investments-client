import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDiscription } from "../action/bondsAction";
import { DiscriptionProps } from "../interface/discriptionInterface";

interface discriptionState {
  discription: DiscriptionProps[];
  isLoadingDiscription: boolean;
  errorLoadingDiscription: string;
}

const initialState: discriptionState = {
  discription: [],
  isLoadingDiscription: false,
  errorLoadingDiscription: "",
};

export const discriptionSlice = createSlice({
  name: "one bond",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDiscription.fulfilled.type]: (
      state,
      action: PayloadAction<DiscriptionProps[]>
    ) => {
      state.isLoadingDiscription = false;
      state.errorLoadingDiscription = "";
      state.discription = action.payload;
    },
    [fetchDiscription.pending.type]: (state) => {
      state.isLoadingDiscription = true;
    },
    [fetchDiscription.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingDiscription = false;
      state.errorLoadingDiscription = action.payload;
    },
  },
});

export default discriptionSlice.reducer;
