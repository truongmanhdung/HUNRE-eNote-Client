
import { takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

export const addLoginAsync = createAction('login/loginCreate');

function* loginSaga(action) {
    
}

export function* productSaga() {
  yield takeLatest(addLoginAsync, loginSaga);
}