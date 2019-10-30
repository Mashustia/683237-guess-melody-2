import React from 'react';
import renderer from 'react-test-renderer';

import GuessGenre from './GuessGenre';

it(`GuessGenre component renders correctly`, () => {
  const component = renderer
    .create(<GuessGenre
      question={{
        question: `test`,
        answer: `test`,
        variants: [
          {
            src: `test`,
            genre: `test`,
            id: 0,
          }
        ]
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
