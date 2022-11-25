import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddCash } from "../../../redux/action/briefcaseAction";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { BriefcaseProps } from "../../../redux/interface/briefcaseInterface";
import { BondRoute, StockRoute } from "../../../route/const";
import TypographyCompanent from "../../atom/typography";
import BondsInBriefcaseComponent from "../../organism/bondsInBriefcase";
import BriefcaseTableComponent from "../../organism/briefcaseTable";
import StocksInBriefcaseComponent from "../../organism/stocksInBriefcase";
import { BriefcaseTemplateWrapp } from "./style";

type BriefcaseTemplateProps = {
  briefcase: BriefcaseProps[];
};

const BriefcaseTemplate: React.FC<BriefcaseTemplateProps> = ({ briefcase }) => {
  const dispatch = useAppDispatch();

  const userId = 1;
  const [cash, setCash] = useState("");

  return (
    <BriefcaseTemplateWrapp>
      <TypographyCompanent variant={"significative"} children={"Портфель"} />
      <div>
        <input value={cash} onChange={(e) => setCash(e.target.value)} />
        Баланс {briefcase.map((el) => el.cash)}$
        <button onClick={() => dispatch(AddCash({ cash, userId }))}>
          Пополнить портфель
        </button>
      </div>
      <BriefcaseTableComponent />
      <Routes>
        <Route
          path={`/${StockRoute}`}
          element={<StocksInBriefcaseComponent id={userId} />}
        />
      </Routes>
      <Routes>
        <Route
          path={`/${BondRoute}`}
          element={<BondsInBriefcaseComponent id={userId} />}
        />
      </Routes>
    </BriefcaseTemplateWrapp>
  );
};

export default BriefcaseTemplate;
