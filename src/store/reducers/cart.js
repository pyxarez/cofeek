import {
  TOGGLE_CART_STATE,
  TOGGLE_ADDED_PANEL_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  CLEAR_CART,
} from '../constants/Cart';

import {
  toArray, 
  filterObject, 
  decreaseTargetCount 
} from '../../utils/helpers';

const initialState = {
  state: false,
  addedPanelState: false,
  hasReceivedData: false,
  errorMessage: '',
  products: {},
  totalCost: 0
}

const cart = ( state = initialState, { type, payload } ) => {
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
        products: payload.data,
        errorMessage: '',
        totalCost: toArray(payload.data).reduce((sum, product) => sum + (product.cost * product.count), 0)
      };
    case CART_RECEIVE_DATA_ERROR:
      return {
        ...state,
        products: {},
        hasReceivedData: false,
        errorMessage: payload.message
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          [payload.data.id]: {
            ...payload.data,
            count: state.products[payload.data.id]
              ? state.products[payload.data.id].count + payload.data.count
              : payload.data.count
          },
        },
        totalCost: state.totalCost + (payload.data.cost * payload.data.count) 
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: filterObject(state.products, payload.data),
        totalCost: state.totalCost - (payload.data.count * payload.data.cost),
      };
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        products: {
          ...state.products,
          [payload.data.id]: {
            ...payload.data,
            count: state.products[payload.data.id].count + 1
          }
        },
        totalCost: state.totalCost + payload.data.cost
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        products: decreaseTargetCount(state.products, payload.data),
        totalCost: state.totalCost - payload.data.cost
      };
    case TOGGLE_ADDED_PANEL_STATE:
      return {
        ...state,
        addedPanelState: !state.addedPanelState,
      };
    case CLEAR_CART:
      return {
        ...state,
        products: {},
        totalCost: 0,
      };
    default:
      return state;
  }
}

export default cart;