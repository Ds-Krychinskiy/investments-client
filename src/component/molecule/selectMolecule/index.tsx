import React, { Dispatch, SetStateAction } from "react";
import OptionComponent from "../../atom/option";
import SelectComponent from "../../atom/select";
import TypographyCompanent from "../../atom/typography";
import { ListType } from "../../organism/advancedSearchStocks";
import { SelectWrappStyle } from "./style";

type SelectMoleculeProps = {
  list: ListType[];
  value: string;
  label: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const SelectMolecule: React.FC<SelectMoleculeProps> = ({
  list,
  value,
  label,
  onChange,
}) => {
  return (
    <SelectWrappStyle>
      <TypographyCompanent variant={"significative"} children={label} />
      <SelectComponent value={value} onChange={onChange}>
        {list.map((el) => (
          <React.Fragment key={el.label}>
            <OptionComponent>{el.label}</OptionComponent>
          </React.Fragment>
        ))}
      </SelectComponent>
    </SelectWrappStyle>
  );
};

export default SelectMolecule;
