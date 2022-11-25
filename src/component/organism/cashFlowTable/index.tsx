import { useAppSelector } from "../../../redux/hooks/hooks";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import {
  CashFlowTableStyle,
  CashFlowTableWrapp,
  HeaderTableWrapp,
  TableCashFlow,
} from "./style";

type CashFlowProps = {};

const CashFlowTable: React.FC<CashFlowProps> = ({}) => {
  const { cashFlows, errorLoadingCashFlow, isLoadingCashFlow } = useAppSelector(
    (state) => state.CashFlowsStockReducer
  );

  return (
    <>
      <HeaderTableWrapp>
        <TypographyCompanent variant={"significative"}>
          Свободный денежный поток
        </TypographyCompanent>
      </HeaderTableWrapp>
      <CashFlowTableWrapp>
        <TableCashFlow>
          {errorLoadingCashFlow ? (
            <TypographyCompanent variant={"error"}>Error</TypographyCompanent>
          ) : (
            <>
              <TypographyCompanent variant={"significative"}>
                Отчетный период
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Дата оконч. отч. периода
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Выручка
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Валовая прибыль
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Операционная прибыль
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Прибыль
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Прибыль акционеров
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Скорректированная прибыль
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                EBITDA
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Операционный денежный поток
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Капитальные затраты
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                Свободный денежный поток
              </TypographyCompanent>
              <TypographyCompanent variant={"significative"}>
                EPS
              </TypographyCompanent>
            </>
          )}
        </TableCashFlow>
        <CashFlowTableStyle>
          {isLoadingCashFlow && <LoaderComponent />}
          {cashFlows?.map((el) => (
            <>
              <TypographyCompanent variant={"reportingYear"}>
                {el.year}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.date}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.revenue}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.grossProfit}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.operatingProfit}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.profit}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.shareholderProfit}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.adjustedEarnings}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EBITDA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.adjustedEBITDA}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.capitalExpenditures}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.freeCashFlow}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.EPS}
              </TypographyCompanent>
            </>
          ))}
        </CashFlowTableStyle>
      </CashFlowTableWrapp>
    </>
  );
};

export default CashFlowTable;
