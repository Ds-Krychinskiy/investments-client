import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BondProps } from "../interface/bondInterface";
import { DiscriptionProps } from "../interface/discriptionInterface";

export const fetchListBonds = createAsyncThunk(
  "/bonds",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<BondProps[]>(
        "http://localhost:4000/api/bonds"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список облигаций");
    }
  }
);

export const fetchOneBond = createAsyncThunk(
  "bonds/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<BondProps[]>(
        `http://localhost:4000/api/bonds/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список облигаций");
    }
  }
);
export const fetchDiscription = createAsyncThunk(
  "bonds/discription/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<DiscriptionProps[]>(
        `http://localhost:4000/api/bonds/discription/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchPaymentSchedule = createAsyncThunk(
  "bonds/payment_schedule/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<DiscriptionProps[]>(
        `http://localhost:4000/api/bonds/payment_schedule/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
