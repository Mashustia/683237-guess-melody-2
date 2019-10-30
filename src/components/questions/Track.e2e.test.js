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
        value={0}
        checked={true}
        onChoose={returnString}
      />
  );

  const input = track.find(`.game__input`);

  input.simulate(`change`, returnString(testString));
  expect(returnString).toHaveBeenCalledWith(testString);
});
