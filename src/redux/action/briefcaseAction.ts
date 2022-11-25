import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddCashInterface } from "../interface/briefcaseInterface";
import { StockProps } from "../interface/stockInterface";

export const fetchBriefcaseUser = createAsyncThunk(
  "briefcase",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/briefcase/fetch/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchListStocksFromBriefcase = createAsyncThunk(
  "/list_stocks/briefcaseId=:briefcaseId",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/briefcase/list_stocks/briefcaseId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchListBondsFromBriefcase = createAsyncThunk(
  "/list_bonds/briefcaseId=:briefcaseId",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/briefcase/list_bonds/briefcaseId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
export const fetchListEtfsFromBriefcase = createAsyncThunk(
  "/list_etfs/briefcaseId=:briefcaseId",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/briefcase/list_bonds/briefcaseId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const AddCash = createAsyncThunk(
  "/addCashToBriefcase",
  async (state: AddCashInterface, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/briefcase/addCashToBriefcase`,
        { ...state }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
