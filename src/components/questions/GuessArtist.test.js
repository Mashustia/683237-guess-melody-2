import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtist from './GuessArtist';

it(`GuessArtist component renders correctly`, () => {
  const component = renderer
    .create(<GuessArtist
      question={{
        src: `test`,
        variants: [
          {
            picture: `test`,
            artist: `test`,
            id: 0
          }
        ]
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
