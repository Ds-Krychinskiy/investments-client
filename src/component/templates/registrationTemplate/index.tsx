import { BaseSyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import InputComponent from "../../atom/input";
import {
  InputWrapp,
  RegistrationTemplateForm,
  RegistrationTemplateWrapp,
} from "./style";
import { RegistrationAction } from "../../../redux/action/userAction";
import ButtonComponent from "../../atom/button";
import TypographyCompanent from "../../atom/typography";

const RegistrationTemplate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const dispatch = useAppDispatch();

  const onFormSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await dispatch(
      RegistrationAction({ firstName, lastName, email, password })
    );
  };

  const isShowPassword = () => {
    setIsShow(!isShow);
  };
  return (
    <RegistrationTemplateWrapp>
      <RegistrationTemplateForm onSubmit={onFormSubmit}>
        <InputComponent
          value={firstName}
          onChange={setFirstName}
          variant={"base"}
          placeholder={"Имя..."}
          type={"email"}
        />
        <InputComponent
          value={lastName}
          onChange={setLastName}
          variant={"base"}
          placeholder={"Фамилия..."}
          type={"text"}
        />
        <InputComponent
          value={email}
          onChange={setEmail}
          variant={"base"}
          placeholder={"Введите email"}
          type={"email"}
        />
        <InputWrapp>
          <InputComponent
            value={password}
            onChange={setPassword}
            variant={"base"}
            placeholder={"Введите пароль"}
            type={isShow ? "text" : "password"}
          />
          <TypographyCompanent
            variant={"error"}
            onClick={() => isShowPassword()}
          >
            X
          </TypographyCompanent>
        </InputWrapp>
        <ButtonComponent
          onClick={() => console.log()}
          variant={"auth"}
          children={"Зарегистрироваться"}
        />
      </RegistrationTemplateForm>
    </RegistrationTemplateWrapp>
  );
};

export default RegistrationTemplate;
