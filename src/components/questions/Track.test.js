import React from 'react';
import renderer from 'react-test-renderer';
import Track from './Track';

it(`Track component renders correctly`, () => {
  const component = renderer
    .create(<Track id={0} onChoose={jest.fn()} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
