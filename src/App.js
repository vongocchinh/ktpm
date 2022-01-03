import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { History } from "./components/History/History";

// css
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./index.css";
import Router from "./router/Router";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    History.setHistory(history);
  }, [history]);

  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  );
};

export default App;
