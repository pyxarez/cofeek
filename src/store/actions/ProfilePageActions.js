import {
  USER_DATA_RECEIVED,
  TOGGLE_NOTIFICATIONS,
  USER_DATA_SAVED,
  TOGGLE_SUCCESS_PANEL,
  USER_DATA_NOT_SAVED,
  USER_PASSWORD_NOT_SAVED,
  REMOVE_FROM_WISH_LIST_SUCCESS,
} from '../constants/ProfilePage.js';
import { database, auth } from '../../firebaseApp';
import { filterObject } from '../../utils/helpers';

const userDataReceived = data => ({
  type: USER_DATA_RECEIVED,
  payload: { ...data },
});

const userDataSuccessfullySaved = userName => ({
  type: USER_DATA_SAVED,
  payload: {
    userName,
  }
});
const userDataNotSaved = error =>({
  type: USER_DATA_NOT_SAVED,
  payload: {
    error
  }
});

const userPasswordNotSaved = error =>({
  type: USER_PASSWORD_NOT_SAVED,
  payload: {
    error
  }
});

const removeFromWishListSuccess = wishList => ({
  type: REMOVE_FROM_WISH_LIST_SUCCESS,
  payload: {
    ...wishList
  }
});

export const listenToProfileData = (userId) =>
  async dispatch => {
    try {
      const ref = database.ref(`users/${userId}/profile`);
      const snapshot = await ref.once('value');
      const data = snapshot.val();
      
      if (data !== null) {
        dispatch( userDataReceived(data) );
      } else {
        dispatch( userDataReceived({}) );
      }
    } catch(error) {
      throw Error(error);
    }
  }

export const toggleNotifications = () =>
  async (dispatch, getState) => {
    try {
      const { profilePage } = getState();
      const notifRef = database.ref(`users/${auth.currentUser.uid}/profile`);
      const updates = {
        notifications: !profilePage.notifications,
      };

      await notifRef.update(updates);
      dispatch({ type: TOGGLE_NOTIFICATIONS });
      return;
    } catch(error) {
      throw Error(error);
    }
  }

export const saveEmailAndName = (name, newEmail) =>
  async dispatch => {
    try {
      await auth.currentUser.updateProfile({ displayName: name });
      await auth.currentUser.updateEmail(newEmail)

      dispatch( userDataSuccessfullySaved(name) );
      dispatch({ type: TOGGLE_SUCCESS_PANEL });
      setTimeout(() => dispatch({ type: TOGGLE_SUCCESS_PANEL }), 400);
    } catch(error) {
      dispatch( userDataNotSaved(error) );
      throw Error(error);
    }
  }

export const savePassword = newPassword =>
  async dispatch => {
    try{
      await auth.currentUser.updatePassword(newPassword);

      dispatch({ type: TOGGLE_SUCCESS_PANEL });
      setTimeout(() => dispatch({ type: TOGGLE_SUCCESS_PANEL }), 1000);
    } catch(error) {
      dispatch( userPasswordNotSaved(error) );
      throw Error(error);
    }
  }

export const removeItemFromWishList = product =>
  async (dispatch, getState) => {
    try {
      const { profilePage } = getState();
      const filteredWishList = filterObject(profilePage.wishList, product);
      const userWishListRef = database.ref(`users/${auth.currentUser.uid}/profile`);
      const updates = {
        wishList: filteredWishList,
      }

      await userWishListRef.update(updates);
      dispatch( removeFromWishListSuccess(filteredWishList) );
    } catch(error) {
      throw Error(error);
    }
  }