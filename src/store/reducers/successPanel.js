import {
  CLOSE_SUCCESS_PANEL,
  OPEN_SUCCESS_PANEL,
} from '../constants/SuccessPanel';

const initialState = {
  panelState: false,
};

const successPanel = (state = initialState, { type, payload }) => {
  switch(type) {
    case OPEN_SUCCESS_PANEL:
      return {
        panelState: true,
      };
    case CLOSE_SUCCESS_PANEL:
      return {
        panelState: false,
      };
    default:
      return state;
  }
}

export default successPanel;