import {
  LOGIN_SUCCESS,
  PASSWORD_RESET_SENT,
  RESTORE_PASSWORD_SUCCESS,
  CREATING_ACCOUNT_SUCCESS,
  LOGIN_FAILURE,
  RESTORE_PASSWORD_FAILURE,
  CREATING_ACCOUNT_FAILURE,
} from '../constants/LoginSignUpPage';

import * as firebase from 'firebase';
import { auth } from '../../firebaseApp';

const creatingAccountSuccess = user => ({
  type: CREATING_ACCOUNT_SUCCESS,
  payload: {
    data: user,
  }
});

const creatingAccountFailure = errorMessage => ({
  type: CREATING_ACCOUNT_FAILURE,
  payload: {
    errorMessage,
  }
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: user,
  }
});

const loginFailure = errorMessage => ({
  type: LOGIN_FAILURE,
  payload: {
    errorMessage,
  }
});

const restorePasswordSuccess = () => ({
  type: RESTORE_PASSWORD_SUCCESS,
});

const restorePasswordFailure = errorMessage => ({
  type: RESTORE_PASSWORD_FAILURE,
  payload: {
    errorMessage,
  }
});

const passwordResetSent = () => ({
  type: PASSWORD_RESET_SENT,
});

export const createAccount = (name, email, password) =>
  async dispatch => {
    try {
      let user;

      if (auth.currentUser.isAnonymous) {
        const credential = firebase.auth.EmailAuthProvider.credential(email, password);
        user = await auth.currentUser.linkWithCredential(credential);
      } else {
        user = await auth.createUserWithEmailAndPassword(email, password);
      }
      user.sendEmailVerification();
      await user.updateProfile({ displayName: name});

      dispatch( creatingAccountSuccess(user) );

      return user;
    } catch(error) {
      dispatch( creatingAccountFailure(error) );
      throw Error(error);
    }
  }

export const login = (email, password) =>
  async dispatch => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      dispatch( loginSuccess(user) );

      return user;
    } catch(error) {
      dispatch( loginFailure(error) );
      throw Error(error);
    }
  }

export const sendPasswordReset = (email) =>
  async dispatch => {
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch( passwordResetSent() );
    } catch(error) {
      console.log(error);
    }
  }

export const verifyPasswordResetCode = (code, newPassword) =>
  async dispatch => {
    try {
      await auth.confirmPasswordReset(code, newPassword);
      dispatch( restorePasswordSuccess() );
    } catch(error) {
      dispatch( restorePasswordFailure(error) );
      console.log(error);
    }
  }
