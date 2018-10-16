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

function update_Mood(mood){
  return {
    type: "UPDATE_MOOD",
    data: mood
  }
}

function showPopUP(){
  return {
    type: 'SHOW_POP_UP',
    data: true,
  }
}

export default {
  changeMonthHeader,
  changeMonthBoard,
  showPopUP,
  update_Mood
}
