import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {AuthorizationStatus} from "../../const";

import MyListButton from "./my-list-button";

describe(`MyListButton snapshot testing`, () => {
  it(`renders component correctly (without Auth)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.NO_AUTH,
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

  it(`renders component correctly (with Auth)`, () => {
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_USER: {
        status: AuthorizationStatus.AUTH,
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
