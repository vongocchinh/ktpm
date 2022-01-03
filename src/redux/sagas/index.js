import { all, call, takeLatest, put } from "redux-saga/effects";
import { History } from "../../components/History/History";
import * as userActions from "../actions/userAction";
import * as todoActions from "../actions/todoAction";
import * as apis from "../../apis";

function* loginRequest(action) {
  try {
    const response = yield call(apis.loginRequest, action.payload);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    yield put(userActions.loginSuccess());
    History.history.push("/");
  } catch (error) {
    console.log(error);
    yield put(userActions.loginFailure());
  }
}

function* registerRequest(action) {
  try {
    const response = yield call(apis.registerRequest, action.payload);
    yield put(userActions.registerSuccess(response.data));
    History.history.push("/login");
  } catch (error) {
    yield put(userActions.registerFailure());
  }
}

function* createTodoRequest(action) {
  try {
    yield call(apis.createTodoRequest, action.payload);
    yield put(todoActions.getTodoRequest());
    History.history.push("/");
  } catch (error) {
    yield put(todoActions.createTodoFailure());
  }
}

function* getTodoRequest() {
  try {
    const response = yield call(apis.getTodoRequest);
    yield put(todoActions.getTodoSuccess(response.data.todos));
  } catch (error) {
    console.log(error);
    yield put(todoActions.getTodoFailure());
  }
}

function* isAuthenticatedRequest() {
  try {
    yield call(apis.isAuthenticatedRequest);
    yield put(userActions.isAuthenticatedSuccess());
  } catch (error) {
    yield put(userActions.isAuthenticatedFailure());
  }
}

function* getTodoByIdRequest(action) {
  try {
    const response = yield call(apis.getTodoByIdRequest, action.payload);
    yield put(todoActions.getTodoByIdSuccess(response.data));
  } catch (error) {
    yield put(todoActions.getTodoByIdFailure());
  }
}

function* updateTodoRequest(action) {
  try {
    const response = yield call(apis.updateTodoRequest, action.payload);
    yield put(todoActions.updateTodoSuccess(response.data));
    History.history.push("/");
  } catch (error) {
    yield put(todoActions.updateTodoFailure());
  }
}

function* deleteTodoRequest(action) {
  try {
    yield call(apis.deleteTodoRequest, action.payload);
    // yield put(todoActions.deleteTodoSuccess(action.payload));
    yield put(todoActions.getTodoRequest());
    History.history.push("/");
  } catch (error) {
    yield put(todoActions.deleteTodoFailure());
  }
}

function* logoutRequest() {
  try {
    const refreshToken = window.localStorage.getItem("refreshToken");
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    yield call(apis.logoutRequest, refreshToken);
    yield put(userActions.logoutSuccess());
  } catch (error) {
    yield put(userActions.logoutFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(userActions.loginRequest, loginRequest),
    takeLatest(userActions.registerRequest, registerRequest),
    takeLatest(todoActions.createTodoRequest, createTodoRequest),
    takeLatest(todoActions.getTodoRequest, getTodoRequest),
    takeLatest(userActions.isAuthenticatedRequest, isAuthenticatedRequest),
    takeLatest(todoActions.getTodoByIdRequest, getTodoByIdRequest),
    takeLatest(todoActions.updateTodoRequest, updateTodoRequest),
    takeLatest(todoActions.deleteTodoRequest, deleteTodoRequest),
    takeLatest(userActions.logoutRequest, logoutRequest),
  ]);
}
