import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Greeting from './Greeting';

Enzyme.configure({adapter: new Adapter()});

it(`Click on start button works`, () => {
  const clickHandler = jest.fn();

  const greeting = shallow(
      <Greeting
        errorsQuantity={0}
        time={0}
        onStart={clickHandler}
      />
  );

  const startButton = greeting.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Handler is called by click on button`, () => {
  const preventDefault = jest.fn();

  const greeting = shallow(
      <Greeting
        errorsQuantity={0}
        time={0}
        onStart={preventDefault}
      />
  );

  const startButton = greeting.find(`button`);

  startButton.simulate(`click`, {preventDefault});
  expect(preventDefault).toHaveBeenCalledTimes(1);
});

