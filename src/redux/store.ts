import { combineReducers, configureStore } from "@reduxjs/toolkit";
import StocksReducer from "./reducers/stocksListReducer";
import OneStockReducer from "./reducers/oneStockReducer";
import AssetcStockReducer from "./reducers/assetsReducer";
import MultipliersStockReducer from "./reducers/multiplersReducer";
import CashFlowsStockReducer from "./reducers/cashFlowReducer";
import ProfitabilitiesStockReducer from "./reducers/profitabilityReducer";
import PaymentScheduleReducer from "./reducers/paymentScheduleReducer";
import BondReducer from "./reducers/bondsListReducer";
import OneBondReducer from "./reducers/oneBondReducer";
import AuthorizationReducer from "./reducers/authorizationReducer";
import RegistrationReducer from "./reducers/authorizationReducer";
import BriefcaseReducer from "./reducers/briefcaseReducer";
import StocksListInBriefcaseReducer from "./reducers/stocksListInBriefcaseReducer";
import BondsListInBriefcaseReducer from "./reducers/bondsListInBriefcaseReducer";
import etfListInBriefcaseReducer from "./reducers/etfListInBriefcaseReducer";
import ListOrdersStocksReducer from "./reducers/listOrdersStocksReducer";
import ListOrdersBondsReducer from "./reducers/listOrdersBondsReducer";
import OneOrderBondReducer from "./reducers/oneOrderBondReducer";
import OneOrderStockReducer from "./reducers/oneOrderStockReducer";

const rootReducer = combineReducers({
  AuthorizationReducer,
  RegistrationReducer,
  BriefcaseReducer,
  StocksListInBriefcaseReducer,
  StocksReducer,
  OneStockReducer,
  AssetcStockReducer,
  MultipliersStockReducer,
  CashFlowsStockReducer,
  ProfitabilitiesStockReducer,
  BondsListInBriefcaseReducer,
  BondReducer,
  PaymentScheduleReducer,
  OneBondReducer,
  etfListInBriefcaseReducer,
  ListOrdersStocksReducer,
  ListOrdersBondsReducer,
  OneOrderBondReducer,
  OneOrderStockReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
