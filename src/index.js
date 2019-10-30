import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app/App';
import {MockData} from './mocks/questions';

const init = () => {
  ReactDOM.render(
      <App
        data={MockData}
      />,
      document.querySelector(`#root`)
  );
};

init();
