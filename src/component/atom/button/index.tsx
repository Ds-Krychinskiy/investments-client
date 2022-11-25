import { ButtonAuthorization, ButtonSearch } from "./style";

type ButtoncomponentProps = {
  children: string;
  onClick?: () => void;
  variant: string;
};

const ButtonComponent: React.FC<ButtoncomponentProps> = ({
  children,
  onClick,
  variant,
}) => {
  switch (variant) {
    case "search":
      return <ButtonSearch onClick={onClick}>{children}</ButtonSearch>;
    case "auth":
      return (
        <ButtonAuthorization onClick={onClick}>{children}</ButtonAuthorization>
      );
    default:
      return <button onClick={onClick}>{children}</button>;
  }
};

export default ButtonComponent;
