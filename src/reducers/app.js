const INITIAL_STATE = {
  currentMonth: 'Jan'
}

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case('CHANGE_MONTH_HEADER'):
      return {
        currentMonth: action.data
      };
    default:
      return state
  }
}


export default appReducer;
