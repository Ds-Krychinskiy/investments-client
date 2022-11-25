import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationAction } from "../action/userAction";
import { UserRegistrationProps } from "../interface/userInterface";

interface RegistrationState {
  registration: UserRegistrationProps[];
  isLoadingRegistration: boolean;
  errorLoadingRegistration: string;
}

const initialState: RegistrationState = {
  registration: [],
  isLoadingRegistration: false,
  errorLoadingRegistration: "",
};

export const RegistrationSlice = createSlice({
  name: "Registration",
  initialState,
  reducers: {},
  extraReducers: {
    [AuthorizationAction.fulfilled.type]: (
      state,
      action: PayloadAction<UserRegistrationProps[]>
    ) => {
      state.isLoadingRegistration = false;
      state.errorLoadingRegistration = "";
      state.registration = action.payload;
    },
    [AuthorizationAction.pending.type]: (state) => {
      state.isLoadingRegistration = true;
    },
    [AuthorizationAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingRegistration = false;
      state.errorLoadingRegistration = action.payload;
    },
  },
});

export default RegistrationSlice.reducer;
