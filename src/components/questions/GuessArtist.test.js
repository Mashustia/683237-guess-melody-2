import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtist from './GuessArtist';

it(`GuessArtist component renders correctly`, () => {
  const component = renderer
    .create(<GuessArtist
      question={{
        src: `https://upload.wikimedia.org/wikipedia/en/2/2d/Champions_League_anthem.ogg`,
        variants: [
          {
            picture: `test`,
            artist: `test`,
            id: 0
          }
        ]
      }}
      onAnswer={jest.fn()}
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
