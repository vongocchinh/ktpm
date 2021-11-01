import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect"; // You can use any testing library

import * as actions from "../redux/action/Login";
import * as types from "../constant/login";

const API_URL = "localhost:3001/";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

    it("creates AUTH_ERROR if user login fails", () => {
      nock(API_URL)
        .post("/auth/login")
        .reply(404, { data: { error: 404 } });

      const expectedActionsFail = [{ type: types.login_fail }];
      const store = mockStore({});

      return store
        .dispatch(actions.login("example@x.com", "password"))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActionsFail);
        });
    });
    it("login if user login in", () => {
        nock(API_URL)
          .post("/auth/login")
          .reply(200, { data: 'login success' });
    
        const expectedActions = [{ type: types.login_success }];
        const store = mockStore({});
    
        return store
          .dispatch(actions.login("example@x.com", "password"))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
});
