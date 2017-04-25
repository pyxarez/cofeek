import { TOGGLE_MENU_STATE } from '../constants/Menu';

const initialState = false;

const menu = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MENU_STATE: 
      return !state;
    default:
      return state;
  }
}

export default menu;