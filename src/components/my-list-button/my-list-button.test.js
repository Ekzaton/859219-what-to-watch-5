import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MyListButton from "./my-list-button";

describe(`MyListButton snapshot testing`, () => {
  it(`renders store-connected component correctly (without Authorization)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: `NO_AUTH`,
      },
    });

    const myListButtonComponent = renderer.create(
        <Provider store={store}>
          <MyListButton
            id={5}
            isFavorite={true}
          />
        </Provider>
    );

    expect(myListButtonComponent.toJSON()).toMatchSnapshot();
  });

  it(`renders store-connected component correctly (with Authorization)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: `AUTH`,
      },
    });

    const myListButtonComponent = renderer.create(
        <Provider store={store}>
          <MyListButton
            id={5}
            isFavorite={true}
          />
        </Provider>
    );

    expect(myListButtonComponent.toJSON()).toMatchSnapshot();
  });
});
