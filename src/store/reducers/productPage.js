import {
  PRODUCTPAGE_RECEIVE_DATA,
  PRODUCTPAGE_RECEIVE_DATA_ERROR,
  INCREASE_PRODUCT_COUNT,
  DECREASE_PRODUCT_COUNT,
} from '../constants/ProductPage';

const initialState = {
  category: '',
  subcategory: '',
  cost: 0,
  count: 1,
  description: '',
  id: '',
  name: '',
  url: '',
  hasReceivedData: false,
  errorMessage: '',
}

const productPage = (state = initialState, { type, payload }) => {
  switch(type) {
    case PRODUCTPAGE_RECEIVE_DATA:
      return {
        ...state,
        ...payload,
        hasReceivedData: true,
        errorMessage: ''
      };
    case PRODUCTPAGE_RECEIVE_DATA_ERROR:
      return {
        ...state,
        hasReceivedData: false,
        errorMessage: payload.message
      };
    case INCREASE_PRODUCT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREASE_PRODUCT_COUNT:
      return {
        ...state,
        count: state.count === 1 ? 1 : state.count - 1
      }
    default:
      return state;
  }
}

export default productPage;