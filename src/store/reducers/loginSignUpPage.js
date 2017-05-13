import {
  LOGIN_SUCCESS,
  PASSWORD_RESET_SENT,
  RESTORE_PASSWORD_SUCCESS,
  CREATING_ACCOUNT_SUCCESS,
  LOGIN_FAILURE,
  RESTORE_PASSWORD_FAILURE,
  CREATING_ACCOUNT_FAILURE,
} from '../constants/LoginSignUpPage';

const initialState = {
  signUpErrorMessage: {
    code: '',
    message: '',
  },
  signUpSuccess: true,
  loginErrorMessage: {
    code: '',
    message: '',
  },
  loginSuccess: true,
  confirmRestorePasswordFormState: false,
  restorePasswordErrorMessage: {
    code: '',
    message: '',
  },
  restorePasswordSuccess: true,
}

export const loginSignUpPage = (state = initialState, { type, payload }) =>{
  switch(type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginErrorMessage: {
          code: '',
          message: '',
        },
        loginSuccess: true
      };
    case CREATING_ACCOUNT_SUCCESS:
      return {
        ...state,
        signUpErrorMessage: {
          code: '',
          message: '',
        },
        signUpSuccess: true,
      };
    case RESTORE_PASSWORD_SUCCESS:
      return {
        ...state,
        restorePasswordErrorMessage: {
          code: '',
          message: '',
        },
        restorePasswordSuccess: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginErrorMessage: payload.errorMessage,
        loginSuccess: false,
      };
    case CREATING_ACCOUNT_FAILURE:
      return {
        ...state,
        signUpErrorMessage: payload.errorMessage,
        signUpSuccess: false,
      };
    case RESTORE_PASSWORD_FAILURE:
      return {
        ...state,
        restorePasswordErrorMessage: payload.errorMessage,
        restorePasswordSuccess: false,
      };
    case PASSWORD_RESET_SENT:
      return {
        ...state,
        confirmRestorePasswordFormState: true,
      }
    default:
      return state;
  }
}

export default loginSignUpPage;
