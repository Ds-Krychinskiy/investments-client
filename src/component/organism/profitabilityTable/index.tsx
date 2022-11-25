import { useAppSelector } from "../../../redux/hooks/hooks";
import { ProfitabilityProps } from "../../../redux/interface/profitabilityInterface";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import {
  HeaderTableWrapp,
  TableProfitability,
  TableProfitabilityStyle,
  TableProfitabilityWrapp,
} from "./style";

type ProfitabiliryTableProps = {};

const ProfitabiliryTable: React.FC<ProfitabiliryTableProps> = ({}) => {
  const { profitability, errorLoadingProfitability, isLoadingProfitability } =
    useAppSelector((state) => state.ProfitabilitiesStockReducer);

  return (
    <>
      <HeaderTableWrapp>
        <TypographyCompanent variant={"significative"}>
          Рентабельность
        </TypographyCompanent>
      </HeaderTableWrapp>
      <TableProfitabilityWrapp>
        <TableProfitability>
          {errorLoadingProfitability && (
            <TypographyCompanent children={"Error"} variant={"error"} />
          )}
          <TypographyCompanent variant={"significative"}>
            Отчётный период
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            ROA
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            ROE
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            ROS
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Валовая рентабельность
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Рентабельность по EBITDA
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Операционная рентабельность
          </TypographyCompanent>
        </TableProfitability>
        <TableProfitabilityStyle>
          {isLoadingProfitability && <LoaderComponent />}
          {profitability?.map((el) => (
            <>
              <TypographyCompanent variant={"reportingYear"}>
                {el.year}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.ROA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.ROE}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.ROS}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.GrossMargin}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EBITDA_Margin}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.operatingProfitability}
              </TypographyCompanent>
            </>
          ))}
        </TableProfitabilityStyle>
      </TableProfitabilityWrapp>
    </>
  );
};

export default ProfitabiliryTable;
