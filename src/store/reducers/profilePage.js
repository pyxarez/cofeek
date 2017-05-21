import {
  USER_DATA_RECEIVED,
  TOGGLE_NOTIFICATIONS,
  USER_DATA_SAVED,
  TOGGLE_SUCCESS_PANEL,
  USER_DATA_NOT_SAVED,
  USER_PASSWORD_NOT_SAVED,
} from '../constants/ProfilePage.js';

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
        nameEmailFormErrorMessage: { ...payload.errorMessage },
      };
    default:
      return state;
  }
}

export default profilePage;