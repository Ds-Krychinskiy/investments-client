import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AssectProps } from "../interface/assectInterface";
import { CashFlowsProps } from "../interface/cashFlowInterface";
import { MultipliersProps } from "../interface/multipliersInterfcae";
import { ProfitabilityProps } from "../interface/profitabilityInterface";
import { AdvancedSearchState, StockProps } from "../interface/stockInterface";

export const AdvancedSearchAction = createAsyncThunk(
  "Advanced Search Stocks",
  async (state: AdvancedSearchState, thunkAPI) => {
    try {
      const {
        ForQualifiedInvestors,
        LA,
        PB,
        PE,
        PFCF,
        PS,
        ROA,
        ROE,
        ROS,
        country,
        exchange,
      } = state;
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/stocks/country?=${country}/exchange?=${exchange}/pe=${PE}/ps?=${PS}/pb?=${PB}/roa?=${ROA}/roe?=${ROE}/ros?=${ROS}/la?=${LA}/pfcf?=${PFCF}/for_qualified_investors?=${ForQualifiedInvestors}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchListStocks = createAsyncThunk(
  "stocks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/stocks`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchOneStock = createAsyncThunk(
  "stocks/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<StockProps[]>(
        `http://localhost:4000/api/stocks/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchAssetsOneStock = createAsyncThunk(
  "stocks/assets/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<AssectProps[]>(
        `http://localhost:4000/api/stocks/assets/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchMultipliersOneStock = createAsyncThunk(
  "stocks/multipliers/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<MultipliersProps[]>(
        `http://localhost:4000/api/stocks/multipliers/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchCashFlowsOneStock = createAsyncThunk(
  "stocks//cash_flows/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<CashFlowsProps[]>(
        `http://localhost:4000/api/stocks/cash_flows/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);

export const fetchProfitabilitiesOneStock = createAsyncThunk(
  "stocks/profitabilities/:id",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<ProfitabilityProps[]>(
        `http://localhost:4000/api/stocks/profitabilities/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить список акций");
    }
  }
);
