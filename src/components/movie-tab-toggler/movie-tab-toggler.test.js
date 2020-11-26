import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import mockPromo from "../../mocks/promo";
import mockReviews from "../../mocks/reviews";

import MovieTabToggler from "./movie-tab-toggler";

describe(`MovieTabToggler snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movieReviews: mockReviews,
    }
  });

  const movieTabTogglerComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <MovieTabToggler
              movie={mockPromo}
              activeTab={`overview`}
              handleTabClick={() => {}}
            />
          </Route>
        </BrowserRouter>
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(movieTabTogglerComponent.toJSON()).toMatchSnapshot();
  });
});
