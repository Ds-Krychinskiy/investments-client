import StocksSearchTemplate from "../../templates/stocksSearchTemplate";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { useEffect } from "react";
import { fetchListStocks } from "../../../redux/action/stockAction";
import LoaderComponent from "../../atom/loader";

const StocksSearchPage = () => {
  const dispatch = useAppDispatch();
  const { stocks, errorLoadingListStokcs, isLoadingListStokcs } =
    useAppSelector((state) => state.StocksReducer);

  useEffect(() => {
    dispatch(fetchListStocks());
  }, []);

  return (
    <>
      {isLoadingListStokcs && <LoaderComponent />}
      <StocksSearchTemplate stocks={stocks} error={errorLoadingListStokcs} />
    </>
  );
};

export default StocksSearchPage;
