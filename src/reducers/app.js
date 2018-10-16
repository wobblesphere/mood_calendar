
const INITIAL_STATE = {
  currentMonth: 'Jan',
  isPopUpShown: false,
  mood: 'none',
}

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case('CHANGE_MONTH_HEADER'):
      return {
        currentMonth: action.data,
        isPopUpShown: state.isPopUpShown,
        mood: state.mood,
      };
      case('SHOW_POP_UP'):
      return {
        isPopUpShown: action.data,
        currentMonth: state.currentMonth,
        mood: state.mood,
      }
      case('UPDATE_MOOD'):
      return{
        mood: action.data,
        isPopUpShown: state.isPopUpShown,
        currentMonth: state.currentMonth,
      }
    default:
      return state
  }
}


export default appReducer;
