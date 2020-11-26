import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import mockPromo from "../../mocks/promo";
import mockReviews from "../../mocks/reviews";

import MovieReviewsTab from "./movie-reviews-tab";

describe(`MovieReviewsTab snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movieReviews: mockReviews,
    }
  });

  const movieReviewsTabComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <MovieReviewsTab
              movie={mockPromo}
            />
          </Route>
        </BrowserRouter>
      </Provider>
  );

  it(`renders store-connected component correctly`, () => {
    expect(movieReviewsTabComponent.toJSON()).toMatchSnapshot();
  });
});
