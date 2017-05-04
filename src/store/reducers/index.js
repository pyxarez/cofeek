import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import cart from './cart';
import products from './products';
import shop from './shop';
import productPage from './productPage';
import checkoutPage from './checkoutPage';

const rootReducer = combineReducers({
  productPage,
  products,
  cart,
  menu,
  shop,
  checkoutPage,
  routing: routerReducer
});

export default rootReducer;