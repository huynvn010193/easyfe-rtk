import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authActions, LogginPayload } from './authSlice';

function* handleLogin(payload: LogginPayload) {
  console.log('Handle', payload);
}

function* handleLogot() {
  console.log('Handle logut');
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LogginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);

    yield take(authActions.logout.type);
    yield fork(handleLogot);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
