import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Usuarios from "./Componentes/Hooks/Usuarios/Usuarios";
import Grafico from "./Componentes/Graficos/Grafico";
/*import ContadorReducer from "./Contador";
import ContadorBasicoRedux from "./ContadorBasicoRedux";
import { Provider } from "react-redux";
import stores from "./store/index";
import ContadorBasicoHooks from './Componentes/Hooks/ContadorBasicoHooks';
*/

ReactDOM.render(
  <React.StrictMode>
    <Grafico />
    <Usuarios />
  </React.StrictMode>,
  document.getElementById("root")
);

/*
    <ContadorBasicoHooks/>

    <ContadorBasicoRedux />
    <br></br>
    <Provider store={stores}>
      <ContadorReducer />
    </Provider>
*/
