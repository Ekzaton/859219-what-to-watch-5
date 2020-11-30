import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import mockPromo from "../../mocks/promo";

import ReviewPage from "./review-page";

describe(`ReviewPage snapshot testing`, () => {
  it(`renders component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        activeMovie: mockPromo,
        isDataSending: false,
        isSendingError: false,
      },
      APP_USER: {
        status: AuthorizationStatus.AUTH,
      },
    });

    const reviewPageComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <ReviewPage/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(reviewPageComponent.toJSON()).toMatchSnapshot();
  });
});
