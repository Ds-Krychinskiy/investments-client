import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationAction, checkAction } from "../action/userAction";
import { UserProps } from "../interface/userInterface";

interface AuthorizationState {
  auth: UserProps[];
  isLoadingAuthorization: boolean;
  errorLoadingLogin: string;
}
const initialState: AuthorizationState = {
  auth: [],
  isLoadingAuthorization: false,
  errorLoadingLogin: "",
};

export const AuthorizationSlice = createSlice({
  name: "Authorization",
  initialState,
  reducers: {},
  extraReducers: {
    [AuthorizationAction.fulfilled.type]: (
      state,
      action: PayloadAction<UserProps[]>
    ) => {
      state.isLoadingAuthorization = false;
      state.errorLoadingLogin = "";
      state.auth = action.payload;
    },
    [checkAction.fulfilled.type]: (
      state,
      action: PayloadAction<UserProps[]>
    ) => {
      state.isLoadingAuthorization = false;
      state.errorLoadingLogin = "";
      state.auth = action.payload;
    },

    [AuthorizationAction.pending.type]: (state) => {
      state.isLoadingAuthorization = true;
    },

    [AuthorizationAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingAuthorization = false;
      state.errorLoadingLogin = action.payload;
    },
  },
});

export default AuthorizationSlice.reducer;
