import {
  TOGGLE_CATEGORIES,
  SHOP_PRODUCTS_RECEIVE_DATA,
  SHOP_PRODUCTS_RECEIVE_DATA_ERROR
} from '../constants/Shop';

import { database } from '../../firebaseApp.js';

export const toggleCategories = () => ({
  type: TOGGLE_CATEGORIES
});

const gettingShopProductsItemsSuccess = value => ({
  type: SHOP_PRODUCTS_RECEIVE_DATA,
  payload: {
    data: value
  }
});

const gettingShopProductsItemsFailure = error => ({
  type: SHOP_PRODUCTS_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

export const listenToProducts = requestedItem =>
  async dispatch => {
    try {
      const requestRef = requestedItem.subcategory === 'all'
        ? database.ref(`products/${requestedItem.category.toLowerCase()}`)
        : database.ref(`products/${requestedItem.category.toLowerCase()}/${requestedItem.subcategory.toLowerCase()}`);

      const snapshot = await requestRef.once('value');
      const value = snapshot.val();

      dispatch(gettingShopProductsItemsSuccess(value));
    } catch(error) {
      dispatch(gettingShopProductsItemsFailure(error));
    }
  };
