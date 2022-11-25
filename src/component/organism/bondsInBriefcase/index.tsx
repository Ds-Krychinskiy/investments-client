import { useEffect } from "react";
import { fetchListBondsFromBriefcase } from "../../../redux/action/briefcaseAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { BondsInBriefcaseWrapp } from "./style";

type BondsInBriefcaseProps = {
  id: number;
};

const BondsInBriefcaseComponent: React.FC<BondsInBriefcaseProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListBondsFromBriefcase(id));
  }, []);

  const {
    bonds,
    errorLoadingListBondsInBriefcase,
    isLoadingListBondsInBriefcase,
  } = useAppSelector((state) => state.BondsListInBriefcaseReducer);

  return <BondsInBriefcaseWrapp></BondsInBriefcaseWrapp>;
};

export default BondsInBriefcaseComponent;
