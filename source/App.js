import React from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Layout from './component/Layout';
import Counter from './container/Counter';
import store from './store';

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Counter} />
        <Route path="counter" component={Counter} />
      </Route>
    </Router>
  </Provider>
);
