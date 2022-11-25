export interface StockProps {
  id: number;
  name: string;
  discription: string;
  founding_date: string;
  tiker: string;
  capitalization: string;
  PE: number;
  PB: number;
  PS: number;
  ROE: number;
  ROA: number;
  ROS: number;
  LA: number;
  PFCF: number;
  for_qualified_investors: boolean;
}

export interface AdvancedSearchState {
  exchange: string;
  country: string;
  PE: string;
  PS: string;
  PB: string;
  ROA: string;
  ROE: string;
  ROS: string;
  LA: string;
  PFCF: string;
  ForQualifiedInvestors: string;
}
