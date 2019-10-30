import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessGenre from './GuessGenre';

Enzyme.configure({adapter: new Adapter()});

it(`Handler returned string`, () => {
  const testString = [`string`];
  const returnString = jest.fn();

  const guessGenre = shallow(
      <GuessGenre
        question={{
          question: ``,
          answer: ``,
          variants: [
            {
              src: ``,
              genre: ``,
              id: 0,
            }
          ]
        }}
        onAnswer={returnString}
      />
  );

  const label = guessGenre.find(`.game__submit`);

  label.simulate(`click`, returnString(testString));
  expect(returnString).toHaveBeenCalledWith(testString);
});
