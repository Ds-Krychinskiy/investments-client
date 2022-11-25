import React, { BaseSyntheticEvent, useState } from "react";
import { AuthorizationAction } from "../../../redux/action/userAction";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import ButtonComponent from "../../atom/button";
import InputComponent from "../../atom/input";
import TypographyCompanent from "../../atom/typography";
import {
  AuthorizationFormWrapp,
  AuthorizationTemplateWrapp,
  InputWrapp,
} from "./style";

const AuthorizationTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(true);
  const dispatch = useAppDispatch();

  const onFormSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await dispatch(AuthorizationAction({ email, password }));
  };

  const isShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <AuthorizationTemplateWrapp>
      <AuthorizationFormWrapp onSubmit={onFormSubmit}>
        <InputComponent
          variant={"base"}
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={setEmail}
        />
        <InputWrapp>
          <InputComponent
            value={password}
            variant={"base"}
            type={isShow ? "text" : "password"}
            placeholder={"Password"}
            onChange={setPassword}
          />{" "}
          <TypographyCompanent
            variant={"error"}
            onClick={() => isShowPassword()}
          >
            X
          </TypographyCompanent>
        </InputWrapp>
        <ButtonComponent
          variant={"auth"}
          children={"Авторизироваться"}
        ></ButtonComponent>
      </AuthorizationFormWrapp>
    </AuthorizationTemplateWrapp>
  );
};

export default AuthorizationTemplate;
