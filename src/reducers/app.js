import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  currentYear: '2018',
  displayYearMenu: false,
  isPopUpShown: false,
  clickedDay: "none",
  year2018Moods: {},
  showPageMask: false,
  // year2018MonthlyMoodRecords: Map({}),
  currentDate: {}
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
        return updateMood(action.data, state)
    // case('UPDATE_MOOD_COUNTS'):
    //     return state.setIn(
    //       ['year2018MonthlyMoodRecords'], action.data);
    case('UPDATE_CURRENT_DATE'):
      return state.setIn(['currentDate'], action.data
      ).set('currentMonth', action.data['month']);
    default:
      return state
  }
}

function updateMood(dayInfo, state) {
  //dayInfo includes squareID, mood, note
  let month = dayInfo.squareID.substr(0, 3);
  let day = dayInfo.squareID.substr(3, (dayInfo.squareID.length));
  let moodsCollection =  JSON.parse(window.localStorage.getItem("moodsCollection"));
  moodsCollection[month][day] = [dayInfo.mood, dayInfo.note];
  window.localStorage.setItem("moodsCollection", JSON.stringify(moodsCollection));
  return state.set("year2018Moods", moodsCollection);
}

export default appReducer;
