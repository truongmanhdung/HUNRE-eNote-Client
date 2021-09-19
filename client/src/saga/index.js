// create by DungTMc on 15/9/2021

import { all } from 'redux-saga/effects';
import { loginSaga } from './login/loginSaga';
export default function* rootSaga() {
  yield all([loginSaga()]);
}