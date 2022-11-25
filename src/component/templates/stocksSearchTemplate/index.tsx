import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOneStock } from "../../../redux/action/stockAction";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { StockProps } from "../../../redux/interface/stockInterface";
import ButtonComponent from "../../atom/button";
import AdvancedSearchComponent from "../../organism/advancedSearchStocks";
import StocksListSearch from "../../organism/stocksListSeatch";
import { StocksSearchTemplateStyle } from "./style";

type StocksSearchProps = {
  stocks: StockProps[];
  error: string;
};

const StocksSearchTemplate: React.FC<StocksSearchProps> = ({
  stocks,
  error,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const goToStockPage = async (id: number) => {
    await dispatch(fetchOneStock(id));
    navigate(`${id}`);
  };

  const ShowAbvancedSearch = () => {
    setShow(() => !show);
  };

  return (
    <StocksSearchTemplateStyle>
      <AdvancedSearchComponent show={show} />
      <ButtonComponent variant={"search"} onClick={() => ShowAbvancedSearch()}>
        Расширенный поиск...
      </ButtonComponent>
      <StocksListSearch
        error={error}
        stocks={stocks}
        goToStockPage={goToStockPage}
      ></StocksListSearch>
    </StocksSearchTemplateStyle>
  );
};

export default StocksSearchTemplate;
