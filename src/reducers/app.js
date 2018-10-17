import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  isPopUpShown: false,
  mood: 'none',
  clickedDay: "none",
  year2018Mood: Map({}),
});

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case('CHANGE_MONTH_HEADER'):
      return state.set("currentMonth", action.data);
    case('SHOW_POP_UP'):
      return state.merge(
        {"isPopUpShown": action.data,
        "clickedDay": action.squareID}
      );
    case('UPDATE_MOOD'):
      return state.updateIn(['year2018Mood', action.squareID], val => action.data).set("isPopUpShown", action.isPopUpShown);
    default:
      return state
  }
}


export default appReducer;
