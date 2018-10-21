import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  displayYearMenu: false,
  isPopUpShown: false,
  mood: 'none',
  clickedDay: "none",
  year2018Moods: Map({}),
  showPageMask: false,
});

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case('CHANGE_MONTH_HEADER'):
      return state.set("currentMonth", action.data);
    case('TOGGLE_POP_UP'):
      return state.merge(
        {"isPopUpShown": action.data.isPopUpShown,
        "clickedDay": action.data.squareID}
      );
    case('TOGGLE_YEAR_MENU'):
      return state.set("displayYearMenu", action.data);
    case('HIDE_YEAR_MENU'):
      return state.set("displayYearMenu", action.data);
    case('UPDATE_MOOD'):
      return state.updateIn(['year2018Moods', action.data.squareID], val => action.data.mood).set("isPopUpShown", action.data.isPopUpShown);
    default:
      return state
  }
}


export default appReducer;
