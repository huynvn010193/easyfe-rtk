import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment, incrementSaga } from './counterSlice';

// export function* log(action: PayloadAction){
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('handleIncrementSaga');
}

export default function* counterSaga() {
  console.log('counter-saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
