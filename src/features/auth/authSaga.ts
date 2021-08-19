import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, fork, take, delay, put } from 'redux-saga/effects';
import { authActions, LogginPayload } from './authSlice';

function* handleLogin(payload: LogginPayload) {
  try {
    yield delay(500); // call API
    localStorage.setItem('access_token', 'Fake_tokken');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Easy FE',
      })
    );
    // redirect admin Page
    yield put(push('/admin'));
  } catch (error) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogot() {
  yield delay(500); // call API
  localStorage.removeItem('access_token');
  // redirect to login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LogginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    // fork: non-blocking: là ko đứng đợi -> chạy tiếp
    // -> nên chỗ này phải dùng call. -> blocking -> đứng đợi.
    yield call(handleLogot);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
