import { Map } from 'immutable';

const INITIAL_STATE = Map({
  currentMonth: 'Jan',
  currentYear: '2018',
  isPopUpShown: false,
  clickedDay: "none",
  year2018Moods: JSON.parse(window.localStorage.getItem("moodsCollection")),
  showPageMask: false,
  moodCounts: JSON.parse(window.localStorage.getItem("moodCounts")),
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
    case('UPDATE_MOOD'):
        return updateMood(action.data, state);
    case('UPDATE_MOOD_COUNTS'):
        return updateMoodCounts(action.data, state);
    default:
      return state
  }
}

function updateMoodCounts(dayInfo, state) {
  //dayInfo includes squareID and mood
  let month = dayInfo.squareID.substr(0, 3);
  let mood = dayInfo.mood
  let moodCounts =  JSON.parse(window.localStorage.getItem("moodCounts"));
  const moodCountOfMonth = moodCounts[month][mood];
  if (!moodCountOfMonth) {
    moodCounts[month][mood] = 1;
  } else {
    moodCounts[month][mood] = moodCountOfMonth+1;
  }
  window.localStorage.setItem("moodCounts", JSON.stringify(moodCounts));
  return state.set("moodCounts", moodCounts);
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
