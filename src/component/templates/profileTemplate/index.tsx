import React from "react";
import { UserProps } from "../../../redux/interface/userInterface";
import TypographyCompanent from "../../atom/typography";
import { CardUser, InformWrapp, ProfileTemplateStyle } from "./style";

type ProfileTemplateProps = {
  user: UserProps[];
};
const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ user }) => {
  console.log(user);
  return (
    <ProfileTemplateStyle>
      {user.map((el) => (
        <CardUser key={el.id}>
          <TypographyCompanent variant={"significative"} children={"Профиль"} />
          <InformWrapp>
            <TypographyCompanent variant={"significative"} children={"Почта"} />
            <TypographyCompanent
              variant={"significative"}
              children={el.email}
            />
          </InformWrapp>
          <InformWrapp>
            <TypographyCompanent variant={"significative"} children={"Имя"} />
            <TypographyCompanent
              variant={"significative"}
              children={el.firstName}
            />
          </InformWrapp>

          <InformWrapp>
            <TypographyCompanent
              variant={"significative"}
              children={"Фамилия"}
            />
            <TypographyCompanent
              variant={"significative"}
              children={el.lastName}
            />
          </InformWrapp>

          <InformWrapp>
            <TypographyCompanent variant={"significative"} children={"Тариф"} />
            <TypographyCompanent
              variant={"significative"}
              children={el.tarrif}
            />
          </InformWrapp>
          <InformWrapp>
            <TypographyCompanent
              variant={"significative"}
              children={"Процент"}
            />
            <TypographyCompanent
              variant={"significative"}
              children={el.percent}
            />
          </InformWrapp>

          <InformWrapp>
            <TypographyCompanent
              variant={"significative"}
              children={"Страна"}
            />
            <TypographyCompanent
              variant={"significative"}
              children={el.country}
            />
          </InformWrapp>
        </CardUser>
      ))}
    </ProfileTemplateStyle>
  );
};

export default ProfileTemplate;
