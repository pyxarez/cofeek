import {
  PRODUCTPAGE_RECEIVE_DATA,
  PRODUCTPAGE_RECEIVE_DATA_ERROR
} from '../constants/ProductPage';

const initialState = {
  category: '',
  subcategory: '',
  cost: 0,
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
        ...payload,
        hasReceivedData: true,
        errorMessage: ''
      };
    case PRODUCTPAGE_RECEIVE_DATA_ERROR:
      return {
        hasReceivedData: false,
        errorMessage: payload.message
      };
    default:
      return state;
  }
}

export default productPage;