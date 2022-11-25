import { useAppSelector } from "../../../redux/hooks/hooks";
import ProfileTemplate from "../../templates/profileTemplate";

const ProfilePage = () => {
  const { auth, errorLoadingLogin, isLoadingAuthorization } = useAppSelector(
    (state) => state.AuthorizationReducer
  );
  return <ProfileTemplate user={auth} />;
};

export default ProfilePage;
