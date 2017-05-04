import {
  TOGGLE_ADDRESS_FORM,
  TOGGLE_GIFT_TEXTAREA,
} from '../constants/CheckoutPage';

const initialState = {
  addressFromState: false,
  giftTextareaState: false,
}

const checkoutPage = (state = initialState, { type, payload }) => {
  switch(type) {
    case TOGGLE_ADDRESS_FORM:
      return {
        ...state,
        addressFromState: !state.addressFromState,
      };
    case TOGGLE_GIFT_TEXTAREA:
      return {
        ...state,
        giftTextareaState: !state.giftTextareaState,
      }
    default:
      return state;
  }
}

export default checkoutPage;