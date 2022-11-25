import { ReactElement } from "react";
import { BoxStyle } from "./style";

type BoxComponentProps = {
  children: ReactElement;
};

const BoxComponent: React.FC<BoxComponentProps> = ({ children }) => {
  return <BoxStyle children={children} />;
};

export default BoxComponent;
