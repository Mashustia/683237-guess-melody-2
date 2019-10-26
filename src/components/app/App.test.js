import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App component renders correctly`, () => {
  const component = renderer
    .create(<App
      data={{
        time: 0,
        mistakes: 0,
        questions: []
      }}
    />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
