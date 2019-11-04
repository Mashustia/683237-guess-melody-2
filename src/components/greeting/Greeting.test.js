import React from 'react';
import renderer from 'react-test-renderer';

import Greeting from './Greeting';

it(`Greeting component renders correctly`, () => {
  const component = renderer
    .create(<Greeting time={0} errorsQuantity={0} onStart={jest.fn()} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
