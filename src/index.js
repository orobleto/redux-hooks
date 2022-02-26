import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import ContadorReducer from "./Contador";
import ContadorBasico from "./ContadorBasicoRedux";
import { Provider } from "react-redux";
import stores from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <ContadorBasico />
    <br></br>
    <Provider store={stores}>
      <ContadorReducer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
