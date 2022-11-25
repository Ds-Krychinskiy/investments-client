import { useAppSelector } from "../../../redux/hooks/hooks";
import {
  BondRoute,
  StockRoute,
  ProfileRoute,
  BriefcaseRoute,
  AuthorizationeRoute,
  RegistrationRoute,
} from "../../../route/const";
import LinkComponent from "../../molecule/links";
import { HeaderStyle } from "./style";

const HeaderComponent = () => {
  const { auth } = useAppSelector((state) => state.AuthorizationReducer);
  console.log(auth);
  return (
    <HeaderStyle>
      <LinkComponent way={StockRoute} label={"Акции"} />
      <LinkComponent way={BondRoute} label={"Облигации"} />
      <LinkComponent way={BriefcaseRoute} label={"Портфель"} />
      {auth.length ? (
        <LinkComponent way={ProfileRoute} label={"Профиль"} />
      ) : (
        <>
          <LinkComponent way={AuthorizationeRoute} label={"Авторизация"} />
          <LinkComponent way={RegistrationRoute} label={"Регистрация"} />
        </>
      )}
    </HeaderStyle>
  );
};

export default HeaderComponent;
