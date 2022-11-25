import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  UserAuthorizationProps,
  UserProps,
  UserRegistrationProps,
} from "../interface/userInterface";

export const RegistrationAction = createAsyncThunk(
  "/registration",
  async (state: UserRegistrationProps, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/registration",
        { ...state }
      );
      localStorage.setItem("token", data.token);
      return [jwt_decode(data.token)];
    } catch (e) {
      return thunkAPI.rejectWithValue("Что-то пошло не так...");
    }
  }
);

export const AuthorizationAction = createAsyncThunk(
  "/authorization",
  async (state: UserAuthorizationProps, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/authorization",
        { ...state }
      );
      localStorage.setItem("token", data.token);
      return [jwt_decode(data.token)];
    } catch (e) {
      return thunkAPI.rejectWithValue("Что-то пошло не так...");
    }
  }
);

export const checkAction = createAsyncThunk(
  "/auth/userId=:id",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const user: UserProps = jwt_decode(token || "");
      const response = await axios.get(
        `http://localhost:4000/api/user/auth/userId=${user.id}`
      );
      return [jwt_decode(response.data.token)];
    } catch (e) {
      return thunkAPI.rejectWithValue("Что-то пошло не так...");
    }
  }
);
