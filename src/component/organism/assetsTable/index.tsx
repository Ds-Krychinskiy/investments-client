import { useAppSelector } from "../../../redux/hooks/hooks";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import {
  AssetsTableStyle,
  AssetsTableWrapp,
  HeaderTableWrapp,
  TableAssets,
} from "./style";

type AssetsTableProps = {};

const AssetsTable: React.FC<AssetsTableProps> = ({}) => {
  const { assets, errorLoadingAssets, isLoadingAssets } = useAppSelector(
    (state) => state.AssetcStockReducer
  );

  return (
    <>
      {errorLoadingAssets && (
        <TypographyCompanent variant={"error"}>
          {errorLoadingAssets}
        </TypographyCompanent>
      )}

      <HeaderTableWrapp>
        <TypographyCompanent variant={"significative"}>
          Активы
        </TypographyCompanent>
      </HeaderTableWrapp>
      <AssetsTableWrapp>
        <TableAssets>
          <TypographyCompanent variant={"significative"}>
            Отчетный период
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Дата оконч. отч. периода
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Капитализация, $
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Капитал
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Капитал акционеров
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Краткосрочные обязательства
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Долгосрочные обязательства
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Итого обязательства
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Кредиты и займы
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Денежные средства и эквиваленты
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Чистый долг
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Активы
          </TypographyCompanent>
          <TypographyCompanent variant={"significative"}>
            Всего обыкновенных акций
          </TypographyCompanent>
        </TableAssets>
        <AssetsTableStyle>
          {isLoadingAssets && <LoaderComponent />}
          {assets?.map((el) => (
            <>
              <TypographyCompanent variant={"reportingYear"}>
                {el.year}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.capitalization}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.capital}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.shareholdersCapital}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.shortTermLiabilities}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.longTermDuties}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.totalLiabilities}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.creditsAndLoans}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.cashAndCashEquivalents}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.netDebt}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.assets}
              </TypographyCompanent>
              <TypographyCompanent variant={"value"}>
                {el.totalOrdinaryShares}
              </TypographyCompanent>
            </>
          ))}
        </AssetsTableStyle>
      </AssetsTableWrapp>
    </>
  );
};

export default AssetsTable;
