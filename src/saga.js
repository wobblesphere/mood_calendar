import { all, call, put, takeEvery, select, take } from 'redux-saga/effects'
import axios from 'axios';
import Actions from './actions/actions.js';

function* updateMood(response){
    const yearMoods = response.data;
    for (var key in yearMoods){
        let squareID = key;
        let value = yearMoods[key];
        let mood = value['mood'];
        let note = value['note'];
        yield put(Actions.update_Mood({
            mood: mood,
            squareID: squareID,
            note: note
        }))
    }
}

function* appMounted() {
    const response = yield call(axios.get, 'http://127.0.0.1:5000/get_mood');
    yield call(updateMood, response);
}

function* submitDayInfo(action) {
    const dayInfo = new FormData();
    dayInfo.append('squareID', action.data.squareID);
    dayInfo.append('mood', action.data.mood);
    dayInfo.append('note', action.data.note);

    yield call(axios, {
        method: 'POST',
        url: 'http://127.0.0.1:5000/store_mood',
        data: dayInfo,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
}

function getMoods(state) {
    return state.get('year2018Moods');
}

export function* updateMoodCounts() {
    const moodCounts = {};
    const moods = yield select(getMoods);
    for(let [month, dayInfo] of moods.entries()) {
        moodCounts[month] = {};
        for (let [_, moodInfo] of dayInfo.entries()) {
            const mood = moodInfo.get('mood');
            if (!(mood in moodCounts[month])){
                moodCounts[month][mood] = 0;
            }
            moodCounts[month][mood] += 1;
        }
    }
    yield put(Actions.updateMoodCounts(moodCounts));
}

export function* watchAppMounted() {
    yield takeEvery('APP_MOUNTED', appMounted)
}

export function* watchSubmitDayInfo() {
    while (true) {
        const action = yield take('UPDATE_MOOD');
        yield call(submitDayInfo, action);
        yield call(updateMoodCounts);
    }
}

export default function* rootSaga() {
    yield all([
      watchAppMounted(),
      watchSubmitDayInfo()
    ])
  }