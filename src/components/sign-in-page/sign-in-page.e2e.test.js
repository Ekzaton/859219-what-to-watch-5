import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Route, BrowserRouter} from "react-router-dom";

import {SignInPage} from "./sign-in-page";

describe(`SignInPage e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on submit`, () => {
    const ref = React.createRef();
    const handleSubmit = jest.fn();

    const signInPageComponent = mount(
        <BrowserRouter>
          <Route>
            <SignInPage
              emailRef={ref}
              passwordRef={ref}
              onSubmit={handleSubmit}
            />
          </Route>
        </BrowserRouter>
    );

    const signInForm = signInPageComponent.find(`.sign-in__form`);
    signInForm.simulate(`submit`, {preventDefault() {}});
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
