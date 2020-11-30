import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import mockPromo from "../../mocks/promo";

import PlayerPage from "./player-page";

describe(`PlayerPage snapshot testing`, () => {
  it(`renders component correctly`, () => {
    const ref = React.createRef();
    const mockStore = configureStore([]);

    const store = mockStore({
      APP_DATA: {
        activeMovie: mockPromo,
      }
    });

    const playerPageComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <PlayerPage
                progressRef={ref}
                videoRef={ref}
                isPlaying={true}
                progressBar={33}
                timeRemaining={1200}
                onFullScreenButtonClick={() => {}}
                onPlayButtonClick={() => {}}
                onMouseDown={() => {}}
              />
            </Route>
          </BrowserRouter>
        </Provider>
    );

    expect(playerPageComponent.toJSON()).toMatchSnapshot();
  });
});
