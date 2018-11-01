const monthDaysDict = {
  'Jan': 31,
  'Feb': 28,
  'Mar': 31,
  'Apr': 30,
  'May': 31,
  'Jun': 30,
  "Jul": 31,
  'Aug': 31,
  'Sep': 30,
  'Oct': 31,
  'Nov': 30,
  'Dec': 31,
};

const Years = [2019, 2018, 2017];

const yearStartingDayDict = {
  '2018': 1,
  '2019': 2,
  '2020': 3,
  '2021': 5,
  '2022': 6,
  '2023': 0,
}
const WEEKDAYS = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
}

const moods = [
  {'type':'fantastic',
    'text': 'Fantastic!',
  },
  {'type': 'good',
    'text': 'Good',
  },
  {'type': 'ok',
    'text': 'OK',
  },
  {'type': 'meh',
    'text': 'Meh',
  },
  {'type': 'bad',
    'text': 'Bad',
  },
  ];

const moodColor = {
  'Fantastic':  '#ccf1c3',
  'Good': '#f5c2e7',
  'OK': '#bccbf5',
  'Meh':'#d2d4da',
  'Bad':'#f57676b0'
}

const YEAR_START_WEEKDAY = 'Monday';

const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const numberToMonth = {
   '1': 'Jan',
   '2': 'Feb',
   '3': 'Mar',
   '4': 'Apr',
   '5': 'May',
   '6': 'Jun',
   '7': 'Jul',
   '8': 'Aug',
   '9': 'Sep',
   '10': 'Oct',
   '11': 'Nov',
   '12': 'Dec',
}
export default {
  monthDaysDict,
  months,
  moods,
  WEEKDAYS,
  YEAR_START_WEEKDAY,
  moodColor,
  Years,
  yearStartingDayDict,
  numberToMonth
}
