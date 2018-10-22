import Constants from './constants';

// monthStartingDay gives the weekday that the month starts on as an integer
// from 0 to 6
function monthStartingDay(month, year) {
  // const currentMonthIndex = Constants.months.indexOf(month);

  // First, get the number of days that has passed
  const daysPassed = getDaysPassed(month)

  // Second, get the number of weeks that have passed
  const weeksPassed = getWeeksPassed(daysPassed);

  // Third, get remainder days
  const remainderDays = getRemainderDays(daysPassed, weeksPassed);

  // Forth, get the day the month starts on!
  return remainderDays + Constants.WEEKDAYS[Constants.YEAR_START_WEEKDAY];
}

function getDaysPassed(month) {
  const currentMonthIndex = Constants.months.indexOf(month);
  let numberOfDaysInPreviousMonths = 0;
  for (let i = 0; i < currentMonthIndex; i++) {
    numberOfDaysInPreviousMonths += Constants.monthDaysDict[Constants.months[i]];
  }
  return numberOfDaysInPreviousMonths;
}

function getWeeksPassed(days) {
  return Math.floor(days/7);
}

function getRemainderDays(daysPassed, weeksPassed) {
  return daysPassed - (weeksPassed*7);
}

function getMood(state,squareID) {
  return state.get("year2018Moods").get(squareID) && state.get("year2018Moods").get(squareID).get("mood")
}

function getNote(state, squareID) {
  return state.get("year2018Moods").get(squareID) && state.get("year2018Moods").get(squareID).get("note");
}

function CalendarDay_getDayInfo(moodDict, squareID, info){
  return moodDict.getIn([squareID, info]);
}

export default {
  monthStartingDay,
  getMood,
  getNote,
  CalendarDay_getDayInfo,
}
