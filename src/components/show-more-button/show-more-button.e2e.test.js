import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ShowMoreButton} from "./show-more-button";

describe(`ShowMoreButton e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on button click`, () => {
    const onShowMoreClick = jest.fn();

    const showMoreButtonComponent = shallow(
        <ShowMoreButton
          onShowMoreClick={onShowMoreClick}
        />
    );

    const catalogButton = showMoreButtonComponent.find(`.catalog__button`);
    catalogButton.simulate(`click`);
    expect(onShowMoreClick).toHaveBeenCalledTimes(1);
  });
});
