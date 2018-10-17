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
  {'type':'Fantastic',
    'text': 'Fantastic!',
  },
  {'type': 'Good',
    'text': 'Good',
  },
  {'type': 'OK',
    'text': 'OK',
  },
  {'type': 'Meh',
    'text': 'Meh, could be better',
  },
  {'type': 'Bad',
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

export default {
  monthDaysDict,
  months,
  moods,
  WEEKDAYS,
  YEAR_START_WEEKDAY,
  moodColor,
  Years
}
