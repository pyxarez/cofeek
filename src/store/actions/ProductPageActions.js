import {
  PRODUCTPAGE_RECEIVE_DATA,
  PRODUCTPAGE_RECEIVE_DATA_ERROR,
  INCREASE_PRODUCT_COUNT,
  DECREASE_PRODUCT_COUNT,
  CLEAR_COUNTER,
  ADDING_PRODUCT_TO_WISHLIST_SUCCESS,
  ADDING_PRODUCT_TO_WISHLIST_FAILURE,
} from '../constants/ProductPage';

import { auth, database } from '../../firebaseApp.js';

const gettingProductDataSuccess = value => ({
  type: PRODUCTPAGE_RECEIVE_DATA,
  payload: {
    ...value
  }
});

const gettingProductDataFailure = error => ({
  type: PRODUCTPAGE_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

export const increaseProductCount = () => ({
  type: INCREASE_PRODUCT_COUNT
});

export const decreaseProductCount = () => ({
  type: DECREASE_PRODUCT_COUNT
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

export const clearCounter = () => ({
  type: CLEAR_COUNTER,
});

export const addProductToWishList = product =>
  async dispatch => {
    try {
      const userWishListRef = database.ref(`/users/${auth.currentUser.uid}/profile/wishList`);
      const updates = {
       [`/${product.id}`]: {
          ...product
        }
      };

      await userWishListRef.update(updates);
    } catch(error) {
      throw Error(error);
    }
  }