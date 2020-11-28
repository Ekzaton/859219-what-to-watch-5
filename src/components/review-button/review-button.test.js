import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import ReviewButton from "./review-button";

describe(`ReviewButton snapshot testing`, () => {
  it(`renders component correctly (without Auth)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.NO_AUTH,
      },
    });

    const reviewButtonComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <ReviewButton
                id={5}
              />
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(reviewButtonComponent.toJSON()).toMatchSnapshot();
  });

  it(`renders component correctly (with Auth)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.AUTH,
      },
    });

    const reviewButtonComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <ReviewButton
                id={5}
              />
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(reviewButtonComponent.toJSON()).toMatchSnapshot();
  });
});
