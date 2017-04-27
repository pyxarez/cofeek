import {
  PRODUCTS_RECEIVE_DATA,
  PRODUCTS_RECEIVE_DATA_ERROR
} from '../constants/Products';

const initialState = {
  hasReceivedData: false,
  errorMessage: '',
  data: {},
}

const products = (state = initialState, { type, payload }) => {
  switch(type) {
    case PRODUCTS_RECEIVE_DATA:
      return {
        ...state,
        hasReceivedData: true,
        errorMessage: '',
        data: payload.data
      }
    case PRODUCTS_RECEIVE_DATA_ERROR:
      return {
        ...state,
        hasReceivedData: false,
        errorMessage: payload.message
      }
    default:
      return state;
  }
}

export default products;