
import { takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

export const addLoginAsync = createAction('login/loginCreate');

function* login(action) {
    
}

export function* loginSaga() {
  yield takeLatest(addLoginAsync, login);
}