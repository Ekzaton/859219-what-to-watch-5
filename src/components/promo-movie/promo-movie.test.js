import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import mockPromo from "../../mocks/promo";

import PromoMovie from "./promo-movie";

describe(`PromoMovie snapshot testing`, () => {
  it(`(withot Auth) renders store-connected component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        promoMovie: mockPromo,
      },
      APP_USER: {
        status: AuthorizationStatus.NO_AUTH,
      },
    });

    const promoMovieComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <PromoMovie/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(promoMovieComponent.toJSON()).toMatchSnapshot();
  });

  it(`(with Auth) renders store-connected component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        promoMovie: mockPromo,
      },
      APP_USER: {
        status: AuthorizationStatus.AUTH,
      },
    });

    const promoMovieComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <PromoMovie/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(promoMovieComponent.toJSON()).toMatchSnapshot();
  });
});
