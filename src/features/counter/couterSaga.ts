import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { incrementSagaSuccess, incrementSaga } from './counterSlice';

// export function* log(action: PayloadAction){
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Wait 2s');
  yield delay(2000);

  console.log('Waiting done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter-saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
