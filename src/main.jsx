import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import User from "./components/User";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <User></User> */}
    <Counter></Counter>
  </Provider>
);
