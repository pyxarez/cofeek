import {
  CLOSE_SUCCESS_PANEL,
  OPEN_SUCCESS_PANEL,
} from '../constants/SuccessPanel';

let timerId;

export const openSuccessPanel = (throttle = 2000) =>
  dispatch => {
    if (typeof timerId !== 'undefined') return; 

    dispatch({ type: OPEN_SUCCESS_PANEL });

    timerId = setTimeout(() => {
      dispatch({ type: CLOSE_SUCCESS_PANEL })
      timerId = undefined;
    }, throttle);
  }

export const closeSuccessPanel = () =>
  dispatch => {
    clearTimeout(timerId);
    timerId = undefined;

    dispatch({ type: CLOSE_SUCCESS_PANEL });
  }

