import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import User from "./user";

describe(`User snapshot testing`, () => {
  it(`(without Auth) renders store-connected component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.NO_AUTH,
      },
    });

    const userComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <User/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(userComponent.toJSON()).toMatchSnapshot();
  });

  it(`(with Auth) renders store-connected component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.AUTH,
      },
    });

    const userComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <User/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(userComponent.toJSON()).toMatchSnapshot();
  });
});
