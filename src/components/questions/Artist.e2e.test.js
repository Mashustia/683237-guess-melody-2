import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Artist from './Artist';

Enzyme.configure({adapter: new Adapter()});

it(`Handler returned string`, () => {
  const testString = `string`;
  const returnString = jest.fn();

  const artist = shallow(
      <Artist
        name={``}
        picture={``}
        id={0}
        checked={false}
        onChange={returnString}
      />
  );

  const label = artist.find(`.artist__name`);

  label.simulate(`click`, returnString(testString));
  expect(returnString).toHaveBeenCalledWith(testString);
});
