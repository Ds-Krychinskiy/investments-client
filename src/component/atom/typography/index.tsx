import {
  ErrorFontTypography,
  LinkFontTypography,
  ReportingYearFontTypography,
  SignificativeFontTypography,
  SuccessfulFontTypography,
  ValueTableFontTypography,
} from "./style";

type TypographyCompanentProps = {
  children: string | number;
  variant: string;
  onClick?: () => void;
};

const TypographyCompanent: React.FC<TypographyCompanentProps> = ({
  variant,
  children,
  onClick,
}) => {
  switch (variant) {
    case "reportingYear":
      return (
        <ReportingYearFontTypography>{children}</ReportingYearFontTypography>
      );
    case "significative":
      return (
        <SignificativeFontTypography>{children}</SignificativeFontTypography>
      );
    case "link":
      return <LinkFontTypography>{children}</LinkFontTypography>;
    case "error":
      return (
        <ErrorFontTypography onClick={onClick}>{children}</ErrorFontTypography>
      );
    case "successful":
      return <SuccessfulFontTypography>{children}</SuccessfulFontTypography>;
    case "value":
      return <ValueTableFontTypography>{children}</ValueTableFontTypography>;
    default:
      return <h2>{children}</h2>;
  }
};

export default TypographyCompanent;
