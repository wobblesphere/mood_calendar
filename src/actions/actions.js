function changeMonthHeader(month) {
  return {
    type: 'CHANGE_MONTH_HEADER',
    data: month
  };
}

function changeMonthBoard(month){
  return {
    type: 'CHANGE_MONTH_BOARD',
    data: month,
  }
}

function showMoodForm(month, day){
  return {
    type: 'SHOW_MOOD_FORM',
    data: month, day
  }
}

export default {
  changeMonthHeader,
  changeMonthBoard,
  showMoodForm
}
