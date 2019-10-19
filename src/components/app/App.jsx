import React from 'react';

import Greeting from '../greeting/Greeting';

export const App = () => {
  return <Greeting
    time={5}
    errorsQuantity={3}
  />;
};

export default App;
