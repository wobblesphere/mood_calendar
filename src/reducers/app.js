import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  displayYearMenu: false,
  isPopUpShown: false,
  clickedDay: "none",
  year2018Moods: Map({}),
  showPageMask: false,
  year2018MonthlyMoodRecords: Map({}),
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
        let squareID = action.data.squareID;
        let month = squareID.substr(0, 3);
        let day = squareID.substr(3, (squareID.length));
        let dayInfo =  Map({
            mood: action.data.mood,
            note: action.data.note,
          })
      return state.setIn(
        ['year2018Moods', month, day], dayInfo
      ).set("isPopUpShown", action.data.isPopUpShown);
    case('UPDATE_MOOD_COUNTS'):
        return state.setIn(
          ['year2018MonthlyMoodRecords'], action.data
        );
    default:
      return state
  }
}

// function setMoodCounts(state, month, mood){
//   if (mood) {
//     let moodCount = state.getIn(['year2018MonthlyMoodRecords', month, mood]);
//     if(moodCount){
//       return state.setIn(
//         ['year2018MonthlyMoodRecords', month, mood], moodCount++
//         )
//     }
//     return state.setIn(
//       ['year2018MonthlyMoodRecords', month, mood], 1
//       )
//   }
// }

export default appReducer;
