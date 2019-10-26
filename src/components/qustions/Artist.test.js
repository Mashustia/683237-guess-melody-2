import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './Artist';

it(`Artist component renders correctly`, () => {
  const component = renderer
    .create(<Artist name={``} picture={``} onChoose={jest.fn()} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
