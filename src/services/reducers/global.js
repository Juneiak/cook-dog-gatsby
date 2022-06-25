import {
  TOGGLE_APP_THEME,
} from '../actions/global';

const initialState = {
  isDarkMode: false,
}

export default function global(state=initialState, action) {
  switch (action.type) {
    case TOGGLE_APP_THEME: {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    }
    default: return state
  }
}