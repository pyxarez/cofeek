import {
  TOGGLE_CART_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR
} from '../constants/Cart';

import { toArray } from '../../utils/helpers';

const initialState = {
  state: false,
  hasReceivedData: false,
  errorMessage: '',
  products: [],
  totalCost: 0
}

const cart = (state = initialState, { type, payload }) => {
  switch(type) {
    case TOGGLE_CART_STATE:
      return {
        ...state,
        state: !state.state
      };
    case CART_RECEIVE_DATA:
      return {
        ...state,
        hasReceivedData: true,
        products: toArray(payload.data),
        errorMessage: '',
        totalCost: toArray(payload.data).reduce((sum, product) => sum + product.cost, 0)
      };
    case CART_RECEIVE_DATA_ERROR:
      return {
        ...state,
        products: null,
        hasReceivedData: false,
        errorMessage: payload.message
      }
    default:
      return state;
  }
}

export default cart;