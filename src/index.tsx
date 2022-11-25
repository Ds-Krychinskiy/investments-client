import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { createGlobalStyle } from "styled-components";

const store = setupStore();
const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #292e39;
  width: 100%;
  height: 100%;
}
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
