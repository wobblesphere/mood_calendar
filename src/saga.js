import { all, call, put, take, takeEvery } from 'redux-saga/effects'
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

export function* watchAppMounted() {
    yield takeEvery('APP_MOUNTED', appMounted)
}

export default function* rootSaga() {
    yield all([
      watchAppMounted()
    ])
  }