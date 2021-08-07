import counterSaga from 'features/counter/couterSaga';
import {all} from 'redux-saga/effects';

function* helloSaga() {
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    counterSaga()
  ]);
}