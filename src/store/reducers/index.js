import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import cart from './cart';
import products from './products';

const rootReducer = combineReducers({
  products,
  cart,
  menu,
  routing: routerReducer
});

export default rootReducer;