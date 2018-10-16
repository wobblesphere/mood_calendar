import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  isPopUpShown: false,
  mood: 'none',
});

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case('CHANGE_MONTH_HEADER'):
      return state.set("currentMonth", action.data);
      case('SHOW_POP_UP'):
      return state.set("isPopUpShown", action.data);
      case('UPDATE_MOOD'):
      return state.set("mood", action.data);
    default:
      return state
  }
}

export default appReducer;
