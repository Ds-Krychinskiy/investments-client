import AuthorizationPage from "../component/pages/authorizationPage";
import BondSeatchPage from "../component/pages/bondsSearchPage";
import BriefcasePage from "../component/pages/briefcasePage";
import OneBondPage from "../component/pages/oneBondPage";
import OneStockPage from "../component/pages/oneStockPage";
import ProfilePage from "../component/pages/profilePage";
import RegistrationPage from "../component/pages/registrationPage";
import StocksSearchPage from "../component/pages/stocksSearchPage";
import {
  AuthorizationeRoute,
  BondRoute,
  BriefcaseRoute,
  ProfileRoute,
  RegistrationRoute,
  StockRoute,
} from "./const";

export const AuthRoute = [
  {
    path: BondRoute,
    Component: BondSeatchPage,
  },
  {
    path: `${BriefcaseRoute}/*`,
    Component: BriefcasePage,
  },
  {
    path: ProfileRoute,
    Component: ProfilePage,
  },
  {
    path: StockRoute,
    Component: StocksSearchPage,
  },
  {
    path: BondRoute + "/:id",
    Component: OneBondPage,
  },
  {
    path: StockRoute + "/:id",
    Component: OneStockPage,
  },
  {
    path: AuthorizationeRoute,
    Component: AuthorizationPage,
  },
  {
    path: RegistrationRoute,
    Component: RegistrationPage,
  },
];
