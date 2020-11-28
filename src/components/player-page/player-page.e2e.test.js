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
    const handleFullScreenButton = jest.fn();

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
              handleFullScreenButton={handleFullScreenButton}
              handlePlayButton={() => {}}
              handleMouseDown={() => {}}
              getMovie={() => {}}
            />
          </Route>
        </BrowserRouter>
    );

    const playerFullScreen = playerPageComponent.find(`.player__full-screen`);
    playerFullScreen.simulate(`click`);
    expect(handleFullScreenButton).toHaveBeenCalledTimes(1);
  });

  it(`execute callback on play button click`, () => {
    const ref = React.createRef();
    const handlePlayButton = jest.fn();

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
              handleFullScreenButton={() => {}}
              handlePlayButton={handlePlayButton}
              handleMouseDown={() => {}}
              getMovie={() => {}}
            />
          </Route>
        </BrowserRouter>
    );

    const playerPlay = playerPageComponent.find(`.player__play`);
    playerPlay.simulate(`click`);
    expect(handlePlayButton).toHaveBeenCalledTimes(1);
  });
});
