import { InputComponentStyle } from "./style";

type InputComponentProps = {
  type: string;
  placeholder?: string;
  children?: string;
  variant: string;
  value?: string;
  onChange: (e: string) => void;
};

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  placeholder,
  variant,
  value,
  onChange,
}) => {
  switch (variant) {
    case "submit":
      return <InputComponentStyle type={type} />;
    case "base":
      return (
        <InputComponentStyle
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    default:
      return <input type={type} placeholder={placeholder}></input>;
  }
};

export default InputComponent;
