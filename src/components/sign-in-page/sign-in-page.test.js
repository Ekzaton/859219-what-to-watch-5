import React from "react";
import renderer from "react-test-renderer";
import {Route, BrowserRouter} from "react-router-dom";

import {SignInPage} from "./sign-in-page";

describe(`SignInPage snapshot testing`, () => {
  it(`renders component correctly`, () => {
    const signInPageComponent = renderer.create(
        <BrowserRouter>
          <Route>
            <SignInPage
              onSubmit={() => {}}
            />
          </Route>
        </BrowserRouter>
    );

    expect(signInPageComponent.toJSON()).toMatchSnapshot();
  });
});
