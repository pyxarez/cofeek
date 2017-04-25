import {
  TOGGLE_CART_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR
} from '../constants/Cart';
import { database } from '../../firebaseApp.js';

const cartProductsRef = database.ref('cart'); 

const gettingCartItemsSuccess = (snapshot) => ({
  type: CART_RECEIVE_DATA,
  payload: {
    data: snapshot.val()
  }
});

const gettingCartItemsFailure = (error) => ({
  type: CART_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

export const toggleCartState = () => ({
    type: TOGGLE_CART_STATE
});

export const listenToCart = () => {
  return async (dispatch) => {
    try {
      const snapshot = await cartProductsRef.once('value');
      dispatch(gettingCartItemsSuccess(snapshot));
    } catch(error) {
      dispatch(gettingCartItemsFailure(error));
    }
  };
};