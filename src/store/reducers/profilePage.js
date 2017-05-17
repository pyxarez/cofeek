import {
  USER_DATA_RECEIVED
} from '../constants/ProfilePage.js';

const initialState = {
  userName: '',
  paymentsHistory: {},
  wishList: {},
  notifications: true,
}

const profilePage = (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_DATA_RECEIVED:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}

export default profilePage;