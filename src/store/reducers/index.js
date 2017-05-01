import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import cart from './cart';
import products from './products';
import shop from './shop';
import productPage from './productPage';

const rootReducer = combineReducers({
  productPage,
  products,
  cart,
  menu,
  shop,
  routing: routerReducer
});

export default rootReducer;