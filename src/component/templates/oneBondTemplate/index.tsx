import DiscriptionBond from "../../organism/discriptionBond";
import { OneBondTemplateStyle } from "./style";
import PaymentSchedule from "../../organism/paymentSchedule";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  fetchOneOrderByBond,
  fetchSuggestedPriceBonds,
} from "../../../redux/action/suggestedPriceAction";
import DialogComponent from "../../organism/dialogOrders";
import { useState } from "react";

type OneBondTemplateProps = {};

const OneBondTemplate: React.FC<OneBondTemplateProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const {
    listOrdersBonds,
    errorLoadingListOrderBonds,
    isLoadingListOrderBonds,
  } = useAppSelector((state) => state.ListOrdersBondsReducer);

  const { oneOrderBond, errorLoadingOneOrderBond, isLoadingOneOrderBond } =
    useAppSelector((state) => state.OneOrderBondReducer);

  const dispatch = useAppDispatch();

  const handleClickOpen = async (id: string) => {
    await dispatch(fetchSuggestedPriceBonds(id));
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <OneBondTemplateStyle>
      <DiscriptionBond handleClickOpen={handleClickOpen} />
      <PaymentSchedule />
      <DialogComponent
        fetchOneOrder={fetchOneOrderByBond}
        open={open}
        errorListOrden={errorLoadingListOrderBonds}
        loadingListOrden={isLoadingListOrderBonds}
        loadingOneOrder={isLoadingOneOrderBond}
        errorOneOrder={errorLoadingOneOrderBond}
        oneOrder={oneOrderBond}
        onClick={handleClickClose}
        order={listOrdersBonds}
      />
    </OneBondTemplateStyle>
  );
};

export default OneBondTemplate;
