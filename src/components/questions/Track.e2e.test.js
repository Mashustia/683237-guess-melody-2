import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Track from './Track';

Enzyme.configure({adapter: new Adapter()});

it(`Handler returned string`, () => {
  const testString = `string`;
  const returnString = jest.fn();

  const track = shallow(
      <Track
        id={0}
        onChoose={returnString}
      />
  );

  const label = track.find(`.game__check`);

  label.simulate(`click`, returnString(testString));
  expect(returnString).toHaveBeenCalledWith(testString);
});
