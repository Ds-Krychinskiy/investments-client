import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { checkAction } from "./redux/action/userAction";
import HeaderComponent from "./component/organism/header";
import { AuthRoute } from "./route/route";

const App = () => {
  const { auth } = useAppSelector((state) => state.AuthorizationReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAction());
    }
  }, []);

  return (
    <Router>
      <HeaderComponent />
      {AuthRoute.map(({ Component, path }) => (
        <Routes key={path}>
          <Route path={`/${path}`} element={<Component />} />
        </Routes>
      ))}
    </Router>
  );
};

export default App;
