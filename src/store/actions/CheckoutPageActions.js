import {
  TOGGLE_ADDRESS_FORM,
  TOGGLE_GIFT_TEXTAREA,
  PAYMENT_SUCCESS,
} from '../constants/CheckoutPage';
import { auth, database } from '../../firebaseApp';

export const toggleAddressForm = () => ({
  type: TOGGLE_ADDRESS_FORM,
});

export const toggleGiftTextarea = () => ({
  type: TOGGLE_GIFT_TEXTAREA,
});

export const paymentSuccess = products => ({
  type: PAYMENT_SUCCESS,
  payload: {
    products,
  }
});

export const payProducts = () =>
  async (dispatch, getState) => {
    try {
      const { cart } = getState();
      const { products } = cart;
      const paymentsHistoryRef = database.ref(`/users/${auth.currentUser.uid}/profile/paymentsHistory`);
      const updates = {
        ...products,
      };

      await paymentsHistoryRef.update(updates);
      dispatch( paymentSuccess(products) );
    } catch(error) {
      throw Error(error);
    }
  }