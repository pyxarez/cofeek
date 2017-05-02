import {
  TOGGLE_CART_STATE,
  TOGGLE_ADDED_PANEL_STATE,
  CART_RECEIVE_DATA,
  CART_RECEIVE_DATA_ERROR,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from '../constants/Cart';
import { database, auth } from '../../firebaseApp.js';
import { filterObject } from '../../utils/helpers';

//Object creators
const gettingCartItemsSuccess = (snapshot) => ({
  type: CART_RECEIVE_DATA,
  payload: {
    data: {
      ...snapshot
    }
  }
});

const gettingCartItemsFailure = (error) => ({
  type: CART_RECEIVE_DATA_ERROR,
  payload: {
    message: error.message
  }
});

const addingCartProductSuccess = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    data: {
      ...product
    }
  }
});

const deletingCartProductSuccess = product => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: {
    data: {
      ...product
    }
  }
});

const increaseItemCountSuccess = item => ({
  type: INCREASE_ITEM_COUNT,
  payload: {
    data: {
      ...item
    }
  }
});

const decreaseItemCountSuccess = item => ({
  type: DECREASE_ITEM_COUNT,
  payload: {
    data: {
      ...item
    }
  }
});

export const toggleCartState = () => ({
  type: TOGGLE_CART_STATE
});

export const toggleAddedPanelState = () => ({
  type: TOGGLE_ADDED_PANEL_STATE
});

//Action creators
export const listenToCart = (user) => {
  return async (dispatch) => {
    try {
      const ref = database.ref(`users/${user.uid}/cart`);
      const snapshot = await ref.once('value');
      const data = snapshot.val();
      
      if (data !== null) {
        dispatch(gettingCartItemsSuccess(data));
      } else {
        dispatch(gettingCartItemsSuccess({}));
      }
    } catch(error) {
      dispatch(gettingCartItemsFailure(error));
    }
  };
};

export const addProductToCart = product =>
  async (dispatch, getState) => {
    try {
      const { cart } = getState();
      const ref = database.ref(`users/${auth.currentUser.uid}/cart`);

      if (cart.products[product.id]) {
        const updates = {
          [`/${product.id}`]: {
            ...product,
            count: cart.products[product.id].count + 1
          }
        };

        await ref.update(updates);
        dispatch( addingCartProductSuccess(product) );
        dispatch( toggleAddedPanelState() );
        setTimeout(() => dispatch( toggleAddedPanelState() ), 1500);
      } else {
        const updates = {
         [`/${product.id}`]: {
            ...product
          }
        };

        await ref.update(updates);
        dispatch( addingCartProductSuccess(product) );
        dispatch( toggleAddedPanelState() );
        setTimeout(() => dispatch( toggleAddedPanelState() ), 1500);
      }
    } catch(error) {
      console.error(`addingProductFailure: ${error}`);
    }
  }

export const deleteProductFromCart = product =>
  async (dispatch, getState) => {
    try {
      const { cart } = getState();
      const ref = database.ref(`users/${auth.currentUser.uid}`);
      const updates = {
        '/cart': filterObject(cart.products, product)
      }

      await ref.update(updates);
      dispatch(deletingCartProductSuccess(product));
    } catch(error) {
      console.error(`deletingProductFailure: ${error}`);
    }
  }

export const increaseItemCount = product => 
  async (dispatch, getState) => {
    try {
      const ref = database.ref(`users/${auth.currentUser.uid}`);
      const updates = {
        [`cart/${product.id}`]: {
          ...product,
          count: product.count + 1,
        }
      };

      await ref.update(updates);
      dispatch(increaseItemCountSuccess(product));
    } catch(error) {
      console.error(`increaseItemCountFailure: ${error}`);
    }
  }

export const decreaseItemCount = product => 
  async (dispatch, getState) => {
    try {
      const { cart } = getState();
      const ref = database.ref(`users/${auth.currentUser.uid}`);
      const updates = cart.products[product.id].count === 1
        ? {
          '/cart': filterObject(cart.products, product),
          }
        : 
        {
          [`cart/${product.id}`]: {
            ...product,
            count: product.count - 1
          }
        }

      await ref.update(updates);
      dispatch(decreaseItemCountSuccess(product));
    } catch(error) {
      console.error(`decreaseItemCountFailure: ${error}`);
    }
  }