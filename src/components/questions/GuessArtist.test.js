import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtist from './GuessArtist';

it(`GuessArtist component renders correctly`, () => {
  const component = renderer
    .create(<GuessArtist
      question={{
        question: ``,
        answer: ``,
        variants: [
          {
            picture: ``,
            artist: ``,
          }
        ]
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
