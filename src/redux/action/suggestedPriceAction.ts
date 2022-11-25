import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateSuggestedPriceInterface,
  FetchSuggestedPriceBondInterface,
  FetchSuggestedPriceStockInterface,
} from "../interface/suggestedPriceInterface";

export const createSuggestedPriceStocks = createAsyncThunk(
  "suggested_price/create",
  async (state: CreateSuggestedPriceInterface, thunkAPI) => {
    try {
      const response = await axios.post<CreateSuggestedPriceInterface[]>(
        "http://localhost:4000/api/suggested_price/create",
        { ...state }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchSuggestedPriceStocks = createAsyncThunk(
  "/list_orders_for_sale/stockId=:stockId/",
  async (tiker: string, thunkAPI) => {
    try {
      const response = await axios.get<FetchSuggestedPriceStockInterface[]>(
        `http://localhost:4000/api/suggested_price/list_orders_for_sale/tiker=${tiker}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
export const fetchSuggestedPriceBonds = createAsyncThunk(
  "/list_orders_for_sale/bondId=:bondId/",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get<FetchSuggestedPriceBondInterface[]>(
        `http://localhost:4000/api/suggested_price/list_orders_for_sale/bondId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchOneOrderByStock = createAsyncThunk(
  "/application_for_one_stock/orderId=:orderId",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<FetchSuggestedPriceBondInterface[]>(
        `http://localhost:4000/api/suggested_price/application_for_one_stock/orderId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
export const fetchOneOrderByBond = createAsyncThunk(
  "/application_for_one_bond/orderId=:orderId",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<FetchSuggestedPriceBondInterface[]>(
        `http://localhost:4000/api/suggested_price/application_for_one_bond/orderId=${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
