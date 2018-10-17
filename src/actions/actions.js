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

function update_Mood(mood, squareID){
  return {
    type: "UPDATE_MOOD",
    data: mood,
    squareID: squareID,
    isPopUpShown: false,
  }
}

function showPopUP(squareID){
  return {
    type: 'SHOW_POP_UP',
    data: true,
    squareID: squareID,
  }
}

export default {
  changeMonthHeader,
  changeMonthBoard,
  showPopUP,
  update_Mood
}
