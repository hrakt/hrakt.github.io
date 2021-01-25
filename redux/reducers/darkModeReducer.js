import { TOGGLE_DARKMODE } from "../actions/darkModeActions";

const darkModeReducer = (state = { value: false }, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, value: !state.value };
    default:
      return { ...state };
  }
};

export default darkModeReducer;
