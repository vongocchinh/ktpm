import React from "react";
import "./App.css";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import Reducer from "./redux/Store";
import { applyMiddleware } from "redux";
import { createBrowserHistory } from "history";

import thunk from "redux-thunk";

import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import RouterLogin from "./router/routerLogin/routerLogin";
export const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  Reducer(history),
  composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouterLogin />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
