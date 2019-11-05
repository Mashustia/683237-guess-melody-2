import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './AudioPlayer';

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      oncanplaythrough: () => {}
    };
  }
  return null;
}

it(`AudioPlayer component renders correctly`, () => {
  const component = renderer
    .create(
        <AudioPlayer
          isPlaying={true}
          src={`https://upload.wikimedia.org/wikipedia/en/2/2d/Champions_League_anthem.ogg`}
          onPlayButtonClick={jest.fn()}
        />,
        {createNodeMock}
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
