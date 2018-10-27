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

function update_Mood({mood, squareID, note}){
  return {
    type: "UPDATE_MOOD",
    data: { mood, squareID, isPopUpShown: false, note }
  }
}

function appMounted() {
  return {
    type: 'APP_MOUNTED'
  }
}


function showPopUP(squareID){
  return {
    type: 'TOGGLE_POP_UP',
    data: { isPopUpShown: true, squareID }
  }
}

function hidePopUp(){
  return {
    type: "TOGGLE_POP_UP",
    data: { isPopUpShown: false},
  }
}

function toggleYearMenu(toggle){
  return{
    type:"TOGGLE_YEAR_MENU",
    data: toggle,
  }
}

function togglePageMask(toggle){
  return{
    type:"TOGGLE_PAGE_MASK",
    data: toggle,
  }
}

export default {
  changeMonthHeader,
  appMounted,
  changeMonthBoard,
  showPopUP,
  update_Mood,
  toggleYearMenu,
  hidePopUp,
  togglePageMask,
}
