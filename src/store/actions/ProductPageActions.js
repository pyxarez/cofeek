import {
  PRODUCTPAGE_RECEIVE_DATA,
  PRODUCTPAGE_RECEIVE_DATA_ERROR
} from '../constants/ProductPage';

import { database } from '../../firebaseApp.js';

const gettingProductDataSuccess = value => ({
  type: PRODUCTPAGE_RECEIVE_DATA,
  payload: {
    data: value
  }
});

const gettingProductDataFailure = error => ({
  type: PRODUCTPAGE_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

export const getProductData = ({ category, subcategory, id }) =>
  async dispatch => {
    try {
      const requestString = `products/${category}/${subcategory}/${id}`;
      const requestRef = database.ref(requestString);

      const snapshot = await requestRef.once('value');
      const value = snapshot.val();

      dispatch( gettingProductDataSuccess(value) );
    } catch(error) {
      dispatch( gettingProductDataFailure(error) );
    }
  };

