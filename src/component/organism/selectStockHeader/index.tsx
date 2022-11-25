import React from "react";
import { StockProps } from "../../../redux/interface/stockInterface";
import ButtonComponent from "../../atom/button";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import { SelectStockHeaderWrapp } from "./style";

type SelectStockHeaderCompanentProps = {
  stock: StockProps[];
  error: string;
  loading: boolean;
  handleClickOpen: (tiker: string) => void;
};

const SelectStockHeaderCompanent: React.FC<SelectStockHeaderCompanentProps> = ({
  stock,
  loading,
  error,
  handleClickOpen,
}) => {
  return (
    <SelectStockHeaderWrapp loading={loading || error}>
      {loading && <LoaderComponent />}
      {error && (
        <TypographyCompanent variant={"error"}>error</TypographyCompanent>
      )}
      {stock.map((el) => (
        <React.Fragment key={el.id}>
          <TypographyCompanent variant={"white"}>Name:</TypographyCompanent>
          <TypographyCompanent variant={"value"}>{el.name}</TypographyCompanent>
          <TypographyCompanent variant={"white"}>Tiker:</TypographyCompanent>
          <TypographyCompanent variant={"value"}>
            {el.tiker}
          </TypographyCompanent>
          <TypographyCompanent variant={"white"}>
            Discription:
          </TypographyCompanent>
          <TypographyCompanent variant={"value"}>
            {el.discription}
          </TypographyCompanent>
          <TypographyCompanent variant={"white"}>
            Founding date:
          </TypographyCompanent>
          <TypographyCompanent variant={"value"}>
            {el.founding_date}
          </TypographyCompanent>
          <TypographyCompanent variant={"white"}>
            For qualified investors
          </TypographyCompanent>
          <TypographyCompanent variant={"value"}>
            {el.for_qualified_investors ? "Yes" : "No"}
          </TypographyCompanent>
          <ButtonComponent
            variant={"search"}
            onClick={() => handleClickOpen(el.tiker)}
          >
            Торговать
          </ButtonComponent>
        </React.Fragment>
      ))}
    </SelectStockHeaderWrapp>
  );
};

export default SelectStockHeaderCompanent;
