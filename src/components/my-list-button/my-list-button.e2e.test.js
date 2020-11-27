import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {AuthorizationStatus} from "../../const";

import {MyListButton} from "./my-list-button";

describe(`MyListButton e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on button click`, () => {
    const onButtonClick = jest.fn();

    const myListButtonComponent = shallow(
        <MyListButton
          id={1}
          isFavorite={true}
          onButtonClick={onButtonClick}
          status={AuthorizationStatus.AUTH}
        />
    );

    const cardButton = myListButtonComponent.find(`.movie-card__button`);
    cardButton.simulate(`click`, {preventDefault() {}});
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
