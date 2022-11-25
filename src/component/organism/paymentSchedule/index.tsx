import { TableRow } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import { TableCellStyle } from "../bondsListSearch/style";
import {
  PaymentScheduleStyle,
  PaymentScheduleWrapp,
  TableRowStyle,
  TableWrappStyle,
} from "./style";

type PaymentScheduleComponentProps = {};

const PaymentSchedule: React.FC<PaymentScheduleComponentProps> = ({}) => {
  const headerTable = [
    "№ купона",
    "Дата выплаты",
    "Ставка купона",
    "Размер выплаты",
    "% от номинала",
    "Номинал",
  ];
  const {
    paymentSchedule,
    errorLoadingPaymentSchedule,
    isLoadingPaymentSchedule,
  } = useAppSelector((state) => state.PaymentScheduleReducer);
  return (
    <PaymentScheduleWrapp>
      <PaymentScheduleStyle>
        <TableRow sx={{ width: "100%" }}>
          {headerTable.map((el) => (
            <TableCellStyle
              key={el}
              children={
                <TypographyCompanent variant={"significative"}>
                  {el}
                </TypographyCompanent>
              }
            />
          ))}
        </TableRow>
        {errorLoadingPaymentSchedule && (
          <TypographyCompanent children={"Error"} variant={"error"} />
        )}
        <TableRowStyle loading={isLoadingPaymentSchedule}>
          {isLoadingPaymentSchedule && <LoaderComponent />}
          {paymentSchedule?.map((el) => (
            <TableWrappStyle>
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.id}
                  </TypographyCompanent>
                }
              />
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.date}
                  </TypographyCompanent>
                }
              />
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.payoutAmount}
                  </TypographyCompanent>
                }
              />
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.couponRate}
                  </TypographyCompanent>
                }
              />
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.percentageOfNominal}
                  </TypographyCompanent>
                }
              />
              <TableCellStyle
                children={
                  <TypographyCompanent variant={"significative"}>
                    {el.nominal}
                  </TypographyCompanent>
                }
              />
            </TableWrappStyle>
          ))}
        </TableRowStyle>
      </PaymentScheduleStyle>
    </PaymentScheduleWrapp>
  );
};

export default PaymentSchedule;
