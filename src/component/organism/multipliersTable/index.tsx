import { useAppSelector } from "../../../redux/hooks/hooks";
import { MultipliersProps } from "../../../redux/interface/multipliersInterfcae";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import {
  HeaderTableWrapp,
  MultipliersTableStyle,
  MultipliersTableWrapp,
  TableMultipliers,
} from "./style";

type MultipliersTableProps = {};

const MultipliersTable: React.FC<MultipliersTableProps> = ({}) => {
  const { multipliers, errorLoadingMultipliers, isLoadingMultipliers } =
    useAppSelector((state) => state.MultipliersStockReducer);

  const AAA = () => {
    return <></>;
  };

  return (
    <>
      <HeaderTableWrapp>
        <TypographyCompanent variant={"significative"}>
          Мультипликаторы
        </TypographyCompanent>
      </HeaderTableWrapp>
      <MultipliersTableWrapp>
        <TableMultipliers>
          {errorLoadingMultipliers && (
            <TypographyCompanent variant={"error"}>Error</TypographyCompanent>
          )}
          <TypographyCompanent variant={"significative"}>
            Отчётный период
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            P/E
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            E/P
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            P/B
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            P/S
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            P/FCF
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            L/A
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            EBITDA
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Debt/Equity
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Net Debt/EBITDA
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            EV/EBITDA
          </TypographyCompanent>
        </TableMultipliers>
        <MultipliersTableStyle>
          {isLoadingMultipliers && <LoaderComponent />}

          {multipliers?.map((el) => (
            <>
              <TypographyCompanent variant={"reportingYear"}>
                {el.year}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.PE}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EP}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.PB}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.PS}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.PFCF}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.LA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EBITDA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.DebtEquity}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.NetDebtEBITDA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EV_EBITDA}
              </TypographyCompanent>
            </>
          ))}
        </MultipliersTableStyle>
      </MultipliersTableWrapp>
    </>
  );
};

export default MultipliersTable;
