import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import cart from './cart';
import products from './products';
import shop from './shop';
import productPage from './productPage';
import checkoutPage from './checkoutPage';
import loginSignUpPage from './loginSignUpPage';
import profilePage from './profilePage';
import successPanel from './successPanel';

const rootReducer = combineReducers({
  productPage,
  products,
  cart,
  menu,
  shop,
  checkoutPage,
  loginSignUpPage,
  profilePage,
  successPanel,
  routing: routerReducer
});

export default rootReducer;