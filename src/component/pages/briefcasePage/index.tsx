import { useEffect } from "react";
import { fetchBriefcaseUser } from "../../../redux/action/briefcaseAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import BriefcaseTemplate from "../../templates/briefcaseTemplate";

const BriefcasePage = () => {
  const { auth } = useAppSelector((state) => state.AuthorizationReducer);

  const { briefcase, errorLoadingBriefcase, isLoadingBriefcase } =
    useAppSelector((state) => state.BriefcaseReducer);

  const dispatch = useAppDispatch();

  const { id } = auth[0];

  const fetchBriefcase = async () => {
    await dispatch(fetchBriefcaseUser(id));
  };

  useEffect(() => {
    fetchBriefcase();
  }, []);

  return (
    <>
      {auth.length ? (
        <>
          {errorLoadingBriefcase && (
            <TypographyCompanent variant={"error"}>
              {errorLoadingBriefcase}
            </TypographyCompanent>
          )}
          {isLoadingBriefcase && <LoaderComponent />}
          <BriefcaseTemplate briefcase={briefcase} />
        </>
      ) : (
        <TypographyCompanent
          variant={"significative"}
          children={"Только у авторизованных пользователей есть портфель"}
        />
      )}{" "}
    </>
  );
};

export default BriefcasePage;
