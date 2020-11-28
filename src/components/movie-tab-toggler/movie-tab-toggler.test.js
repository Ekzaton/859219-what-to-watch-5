import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {Tab} from "../../const";

import mockPromo from "../../mocks/promo";
import mockReviews from "../../mocks/reviews";

import MovieTabToggler from "./movie-tab-toggler";

describe(`MovieTabToggler snapshot testing`, () => {
  it(`renders component correctly (Overview tab)`, () => {
    const movieTabTogglerComponent = renderer.create(
        <MovieTabToggler
          movie={mockPromo}
          activeTab={Tab.OVERVIEW}
          onTabClick={() => {}}
        />
    );

    expect(movieTabTogglerComponent.toJSON()).toMatchSnapshot();
  });

  it(`renders component correctly (Details tab)`, () => {

    const movieTabTogglerComponent = renderer.create(
        <MovieTabToggler
          movie={mockPromo}
          activeTab={Tab.DETAILS}
          onTabClick={() => {}}
        />
    );

    expect(movieTabTogglerComponent.toJSON()).toMatchSnapshot();
  });

  it(`renders component correctly (Reviews tab)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        movieReviews: mockReviews,
      }
    });

    const movieTabTogglerComponent = renderer.create(
        <Provider store={store}>
          <MovieTabToggler
            movie={mockPromo}
            activeTab={Tab.REVIEWS}
            onTabClick={() => {}}
          />
        </Provider>
    );

    expect(movieTabTogglerComponent.toJSON()).toMatchSnapshot();
  });
});
