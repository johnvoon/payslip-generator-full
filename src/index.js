import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import configureStore from "./store";
import "./styles/styles.scss";
import "./styles/styles.less";
import routes from "./routes";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={routes}
      onUpdate={() => window.scrollTo(0, 0)}
      history={browserHistory}
    />
  </Provider>,
  document.getElementById("root")
);
