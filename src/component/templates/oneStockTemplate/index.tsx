import { useEffect, useState } from "react";
import {
  fetchAssetsOneStock,
  fetchCashFlowsOneStock,
  fetchMultipliersOneStock,
  fetchProfitabilitiesOneStock,
} from "../../../redux/action/stockAction";
import {
  fetchOneOrderByStock,
  fetchSuggestedPriceStocks,
} from "../../../redux/action/suggestedPriceAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { StockProps } from "../../../redux/interface/stockInterface";
import AssetsTable from "../../organism/assetsTable";
import CashFlowTable from "../../organism/cashFlowTable";
import DialogComponent from "../../organism/dialogOrders";
import MultipliersTable from "../../organism/multipliersTable";
import ProfitabiliryTable from "../../organism/profitabilityTable";
import SelectStockHeaderCompanent from "../../organism/selectStockHeader";
import { OneStockTemplateStyle, ReportingWrapper } from "./style";

type OneStockTemplateProps = {};

const OneStockTemplate: React.FC<OneStockTemplateProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const { stock, errorLoadingOneStocks, isLoadingOneStocks } = useAppSelector(
    (state) => state.OneStockReducer
  );

  const handleClickOpen = async (tiker: string) => {
    await dispatch(fetchSuggestedPriceStocks(tiker));
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const {
    listOrdersStocks,
    errorLoadingListOrderStocks,
    isLoadingListOrderStocks,
  } = useAppSelector((state) => state.ListOrdersStocksReducer);

  const { oneOrderStock, errorLoadingOneOrderStock, isLoadingOneOrderStock } =
    useAppSelector((state) => state.OneOrderStockReducer);

  const idElement = stock?.find((el) => el.id);

  useEffect(() => {
    dispatch(fetchAssetsOneStock(idElement?.id || 0));
    dispatch(fetchMultipliersOneStock(idElement?.id || 0));
    dispatch(fetchCashFlowsOneStock(idElement?.id || 0));
    dispatch(fetchProfitabilitiesOneStock(idElement?.id || 0));
  }, []);

  return (
    <OneStockTemplateStyle>
      <SelectStockHeaderCompanent
        stock={stock}
        error={errorLoadingOneStocks}
        loading={isLoadingOneStocks}
        handleClickOpen={handleClickOpen}
      />
      <ReportingWrapper>
        <CashFlowTable />
        <AssetsTable />
        <MultipliersTable />
        <ProfitabiliryTable />
        <DialogComponent
          open={open}
          fetchOneOrder={fetchOneOrderByStock}
          oneOrder={oneOrderStock}
          errorListOrden={errorLoadingListOrderStocks}
          loadingListOrden={isLoadingListOrderStocks}
          errorOneOrder={errorLoadingOneOrderStock}
          loadingOneOrder={isLoadingOneOrderStock}
          onClick={handleClickClose}
          order={listOrdersStocks}
        />
      </ReportingWrapper>
    </OneStockTemplateStyle>
  );
};

export default OneStockTemplate;
