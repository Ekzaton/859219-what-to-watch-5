import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Route, BrowserRouter} from "react-router-dom";

import mockPromo from "../../mocks/promo";

import {PlayerPage} from "./player-page";

describe(`PlayerPage e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on fullscreen button click`, () => {
    const ref = React.createRef();
    const onFullScreenButtonClick = jest.fn();

    const playerPageComponent = mount(
        <BrowserRouter>
          <Route>
            <PlayerPage
              movie={mockPromo}
              progressRef={ref}
              videoRef={ref}
              isPlaying={true}
              progressBar={33}
              timeRemaining={1200}
              onFullScreenButtonClick={onFullScreenButtonClick}
              onPlayButtonClick={() => {}}
              onMouseDown={() => {}}
              getMovie={() => {}}
            />
          </Route>
        </BrowserRouter>
    );

    const playerFullScreen = playerPageComponent.find(`.player__full-screen`);
    playerFullScreen.simulate(`click`);
    expect(onFullScreenButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`execute callback on play button click`, () => {
    const ref = React.createRef();
    const onPlayButtonClick = jest.fn();

    const playerPageComponent = mount(
        <BrowserRouter>
          <Route>
            <PlayerPage
              movie={mockPromo}
              progressRef={ref}
              videoRef={ref}
              isPlaying={true}
              progressBar={33}
              timeRemaining={1200}
              onFullScreenButtonClick={() => {}}
              onPlayButtonClick={onPlayButtonClick}
              onMouseDown={() => {}}
              getMovie={() => {}}
            />
          </Route>
        </BrowserRouter>
    );

    const playerPlay = playerPageComponent.find(`.player__play`);
    playerPlay.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
