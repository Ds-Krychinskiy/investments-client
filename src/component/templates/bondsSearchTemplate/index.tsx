import { BondsSearchTemplateStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  fetchDiscription,
  fetchPaymentSchedule,
} from "../../../redux/action/bondsAction";
import TableBondComponent from "../../organism/bondsListSearch";

type BondSearchProps = {};

const BondsSearchTemplate: React.FC<BondSearchProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goToBondPage = async (id: number) => {
    await dispatch(fetchDiscription(id));
    await dispatch(fetchPaymentSchedule(id));
    navigate(`${id}`);
  };

  return (
    <BondsSearchTemplateStyle>
      <TableBondComponent goToBondPage={goToBondPage} />
    </BondsSearchTemplateStyle>
  );
};

export default BondsSearchTemplate;
