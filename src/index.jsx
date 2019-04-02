import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';

import App from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
