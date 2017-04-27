import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Home from './components/Home';

import { auth } from './firebaseApp';
import { listenToCart } from './store/actions/CartActions';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

auth.onAuthStateChanged(user => {
  if (user) {
    console.group('onAuthState');
    console.log('This is a user information');
    console.log(user);
    console.groupEnd('onAuthState');
    store.dispatch(listenToCart(user));
  } else {
    auth.signInAnonymously()
    .then(idk => console.log(`Я родился: ${idk}`))
    .catch(error => {
      console.log('Error with anon signIt');
      console.log(error);
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='home'/>

      <Route path='/' component={App}>
        <Route path='home' component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
