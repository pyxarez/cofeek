import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Home from './components/Home';

import ShopContainer from './containers/Shop';
import ProductPageContainer from './containers/ProductPage';
import SearchResultsPageContainer from './containers/SearchResultsPage';
import CheckoutPageContainer from './containers/CheckoutPage';

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
    .then(info => console.log(`Я родился: ${info}`))
    .catch(error => {
      console.log('Error with anon signIn');
      console.log(error);
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={ () => window.scrollTo(0, 0) } history={history}>
      <Redirect from='/' to='home'/>

      <Route path='/' component={ App }>
        <Route path='home' component={ Home }/>

        <Route path='shop' component={ ShopContainer }/>
        <Route path='shop/:category' component={ ShopContainer }/>
        <Route path='shop/:category/:subcategory' component={ ShopContainer }/>

        <Route path='product/:category/:subcategory/:id' component={ ProductPageContainer }/>

        <Route path='search/:query' component={ SearchResultsPageContainer }/>

        <Route path='checkout' component={ CheckoutPageContainer }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);