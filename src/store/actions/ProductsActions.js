import {
  PRODUCTS_RECEIVE_DATA,
  PRODUCTS_RECEIVE_DATA_ERROR
} from '../constants/Products';

import { database } from '../../firebaseApp.js';

const productsRef = database.ref('products'); 

const gettingProductsItemsSuccess = (snapshot) => ({
  type: PRODUCTS_RECEIVE_DATA,
  payload: {
    data: snapshot.val()
  }
});

const gettingProductsItemsFailure = (error) => ({
  type: PRODUCTS_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

export const listenToProducts = requestedItem => {
  return async (dispatch) => {
    try {
      let snapshot;

      if (typeof requestedItem === 'undefined') {
        snapshot = await productsRef.once('value');
      } else {
        const requestRef = requestedItem.type
          ? database.ref(`products/${requestedItem.category}/${requestedItem.type}`)
          : database.ref(`products/${requestedItem.category}`);
        snapshot = await requestRef.once('value');
      }

      dispatch(gettingProductsItemsSuccess(snapshot));
    } catch(error) {
      dispatch(gettingProductsItemsFailure(error));
    }
  };
};
