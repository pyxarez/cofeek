import {
  TOGGLE_ADDRESS_FORM,
  TOGGLE_GIFT_TEXTAREA
} from '../constants/CheckoutPage';

export const toggleAddressForm = () => ({
  type: TOGGLE_ADDRESS_FORM,
});

export const toggleGiftTextarea = () => ({
  type: TOGGLE_GIFT_TEXTAREA,
});