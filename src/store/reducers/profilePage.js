import {
  USER_DATA_RECEIVED,
  TOGGLE_NOTIFICATIONS,
  USER_DATA_SAVED,
  TOGGLE_SUCCESS_PANEL,
} from '../constants/ProfilePage.js';

const initialState = {
  userName: '',
  paymentsHistory: {},
  wishList: {},
  notifications: true,
  successPanelState: false,
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
      };
    case TOGGLE_SUCCESS_PANEL:
      return {
        ...state,
        successPanelState: !state.successPanelState,
      }
    default:
      return state;
  }
}

export default profilePage;