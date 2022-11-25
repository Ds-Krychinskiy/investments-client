import TypographyCompanent from "../../atom/typography";
import { LinkComponentStyle } from "./style";

type LinkcomponentProps = {
  way: string;
  label: string;
};

const LinkComponent: React.FC<LinkcomponentProps> = ({ way, label }) => {
  return (
    <LinkComponentStyle to={way}>
      <TypographyCompanent variant={"link"}>{label}</TypographyCompanent>
    </LinkComponentStyle>
  );
};

export default LinkComponent;
