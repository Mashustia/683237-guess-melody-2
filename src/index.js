import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app/App';
import {mockData} from './mocks/questions';

const init = () => {
  ReactDOM.render(
      <App
        data={mockData}
      />,
      document.querySelector(`#root`)
  );
};

init();
