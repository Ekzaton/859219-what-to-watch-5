import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import mockMovies from "../../mocks/movies";

import MyListPage from "./my-list-page";

describe(`MyListPage snapshot testing`, () => {
  it(`renders store-connected component correctly`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        favoriteMovies: mockMovies,
      },
      APP_USER: {
        status: AuthorizationStatus.AUTH,
      },
    });

    const myListPageComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <MyListPage/>
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(myListPageComponent.toJSON()).toMatchSnapshot();
  });
});
