import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootSaga from "./sagas";

import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
