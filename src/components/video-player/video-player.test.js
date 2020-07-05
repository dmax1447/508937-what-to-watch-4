import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

import films from '../../mocks/tests/films.js';

it(`<VideoPlayer /> should render properly`, () => {
  const player = renderer
        .create(<VideoPlayer movie={films[0]} />)
        .toJSON();

  expect(player).toMatchSnapshot();
});
