import { useAppSelector } from "../../../redux/hooks/hooks";
import ButtonComponent from "../../atom/button";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import { DiscriptionBondWrapp, HeaderTableWrapp } from "./style";

type DiscriptionBondProps = {
  handleClickOpen: (isin: string) => void;
};

const DiscriptionBond: React.FC<DiscriptionBondProps> = ({
  handleClickOpen,
}) => {
  const { discription, errorLoadingDiscription, isLoadingDiscription } =
    useAppSelector((state) => state.OneBondReducer);
  return (
    <div>
      <HeaderTableWrapp>
        <TypographyCompanent variant={"value"}>
          Описание облигации
        </TypographyCompanent>
      </HeaderTableWrapp>
      {errorLoadingDiscription && (
        <TypographyCompanent variant={"error"}>
          errorLoadingDiscription
        </TypographyCompanent>
      )}
      <DiscriptionBondWrapp loading={isLoadingDiscription}>
        {isLoadingDiscription && <LoaderComponent />}

        {discription?.map((el) => (
          <>
            <TypographyCompanent variant={"value"}>Статус</TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.status}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Номинальный объем
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.nominalVolume}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Дата начала торгов
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.tradingStartDate}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Дата погашения
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.maturityDate}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>Номинал</TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.nominal}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Регистрационный номер
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.registrationNumber}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              ISIN код
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.ISIN}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>Эмитент</TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.issuer}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Размещенный объем
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.placedVolume}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Тип облигации
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.typeOfBond}
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              Размер лота
            </TypographyCompanent>
            <TypographyCompanent variant={"value"}>
              {el.lotSize}
            </TypographyCompanent>
            <ButtonComponent
              variant={"search"}
              onClick={() => handleClickOpen(el.ISIN)}
            >
              Торговать
            </ButtonComponent>
          </>
        ))}
      </DiscriptionBondWrapp>
    </div>
  );
};

export default DiscriptionBond;
