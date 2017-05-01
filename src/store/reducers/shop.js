import {
  TOGGLE_CATEGORIES,
  SHOP_PRODUCTS_RECEIVE_DATA,
  SHOP_PRODUCTS_RECEIVE_DATA_ERROR
} from '../constants/Shop';

const initialState = {
  categoryPanelState: false,
  hasReceivedData: false,
  errorMessage: '',
  data: {}
};

const shop = (state = initialState, { type, payload }) => {
  switch(type) {
    case TOGGLE_CATEGORIES: 
      return {
        ...state,
        categoryPanelState: !state.categoryPanelState,
      };
    case SHOP_PRODUCTS_RECEIVE_DATA:
      return {
        ...state,
        data: payload.data
      };
    case SHOP_PRODUCTS_RECEIVE_DATA_ERROR:
      return {
        ...state,
        data: {},
        hasReceivedData: false,
        errorMessage: payload.message
      };
    default:
      return state;
  }
}

export default shop;