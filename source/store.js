import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducer').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
