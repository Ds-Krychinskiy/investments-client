import { BondProps } from "./bondInterface";
import { StockProps } from "./stockInterface";

export interface BriefcaseProps {
  id: number;
  cash: string;
  stocks: StockProps[];
  bonds: BondProps[];
}

export interface AddCashInterface {
  cash: string;
  userId: number;
}
