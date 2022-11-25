import { useEffect } from "react";
import { fetchListStocksFromBriefcase } from "../../../redux/action/briefcaseAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { StocksInBriefcaseWrapp } from "./style";

type StocksInBriefcaseComponentProps = {
  id: number;
};

const StocksInBriefcaseComponent: React.FC<StocksInBriefcaseComponentProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListStocksFromBriefcase(id));
  }, []);

  const {
    stocks,
    errorLoadingListStocksInBriefcase,
    isLoadingListStocksInBriefcase,
  } = useAppSelector((state) => state.StocksListInBriefcaseReducer);

  return (
    <div>
      {stocks.map((el) => (
        <StocksInBriefcaseWrapp>{el.name}</StocksInBriefcaseWrapp>
      ))}
    </div>
  );
};

export default StocksInBriefcaseComponent;
