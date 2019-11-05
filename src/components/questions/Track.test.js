import React from 'react';
import renderer from 'react-test-renderer';

import Track from './Track';

it(`Track component renders correctly`, () => {
  const component = renderer
    .create(
        <Track
          id={1}
          value={1}
          checked={true}
          isPlaying={true}
          src={`abc`}
          onChoose={jest.fn()}
          onPlayButtonClick={jest.fn()}
        />, {
          createNodeMock(element) {
            if (element.type === `audio`) {
              return {
                oncanplaythrough: () => {}
              };
            }
            return null;
          }
        })
    .toJSON();
  expect(component).toMatchSnapshot();
});
