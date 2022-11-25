export interface CreateSuggestedPriceInterface {
  amount: number;
  status: string;
  userId: number;
  stockId: number;
}

export interface FetchSuggestedPriceStockInterface {
  id: number;
  amount: number;
  status: string;
  price: string;
  suggestedPriceId: number;
  stockId: number;
}
export interface FetchSuggestedPriceBondInterface {
  id: number;
  amount: number;
  status: string;
  price: string;
  suggestedPriceId: number;
  bondId: number;
}
