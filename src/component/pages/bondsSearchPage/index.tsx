import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import BondsSearchTemplate from "../../templates/bondsSearchTemplate";
import { useEffect } from "react";
import { fetchListBonds } from "../../../redux/action/bondsAction";

const BondSeatchPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListBonds());
  }, []);

  return <BondsSearchTemplate />;
};

export default BondSeatchPage;
