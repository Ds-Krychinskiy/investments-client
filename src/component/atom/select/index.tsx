import { ReactElement } from "react";
import { SelectComponentStyle } from "./style";

type SelectComponentProps = {
  children: ReactElement[];
  value: string;
  onChange: (value: string) => void;
};

const SelectComponent: React.FC<SelectComponentProps> = ({
  children,
  value,
  onChange,
}) => {
  return (
    <SelectComponentStyle
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {children}
    </SelectComponentStyle>
  );
};

export default SelectComponent;
