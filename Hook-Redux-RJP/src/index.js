import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import myReduxStore from "./redux/store/Store";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={myReduxStore}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);