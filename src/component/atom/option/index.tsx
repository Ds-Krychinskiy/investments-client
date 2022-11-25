import { ReactElement } from "react";
import { OptionComponentStyle } from "./style";

type OptionComponentProps = {
  children: string;
};
const OptionComponent: React.FC<OptionComponentProps> = ({ children }) => {
  return <OptionComponentStyle>{children}</OptionComponentStyle>;
};

export default OptionComponent;
