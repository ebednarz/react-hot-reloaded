import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  mountNode
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      mountNode
    );
  });
}
