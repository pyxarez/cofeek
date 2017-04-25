import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import cart from './cart';

const rootReducer = combineReducers({
  cart,
  menu,
  routing: routerReducer
});

export default rootReducer;