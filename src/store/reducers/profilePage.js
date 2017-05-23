import {
  USER_DATA_RECEIVED,
  TOGGLE_NOTIFICATIONS,
  USER_DATA_SAVED,
  TOGGLE_SUCCESS_PANEL,
  USER_DATA_NOT_SAVED,
  USER_PASSWORD_NOT_SAVED,
  REMOVE_FROM_WISH_LIST_SUCCESS,
} from '../constants/ProfilePage.js';
import {
  ADDING_PRODUCT_TO_WISHLIST_SUCCESS,
} from '../constants/ProductPage';

const initialState = {
  userName: '',
  paymentsHistory: {},
  wishList: {},
  notifications: true,
  successPanelState: false,
  nameEmailFormErrorMessage: {
    code: '',
    message: '',
  },
  passwordFormErrorMessage: {
    code: '',
    message: '',
  },
}

const profilePage = (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_DATA_RECEIVED:
      return {
        ...state,
        ...payload
      };
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        notifications: !state.notifications,
      };
    case USER_DATA_SAVED:
      return {
        ...state,
        userName: payload.userName,
        nameEmailFormErrorMessage: {
          code: '',
          message: '',
        },
      };
    case TOGGLE_SUCCESS_PANEL:
      return {
        ...state,
        successPanelState: !state.successPanelState,
      };
    case USER_DATA_NOT_SAVED:
      return {
        ...state,
        nameEmailFormErrorMessage: { ...payload.error },
      };
    case USER_PASSWORD_NOT_SAVED:
      return {
        ...state,
        passwordFormErrorMessage: { ...payload.error },
      };
    case REMOVE_FROM_WISH_LIST_SUCCESS:
      return {
        ...state,
        wishList: { ...payload }
      };
    case ADDING_PRODUCT_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        wishList: {
          ...state.wishList,
          [payload.product.id]: { ...payload.product },
        }
      };
    default:
      return state;
  }
}

export default profilePage;