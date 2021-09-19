// create by DungTMc on 15/9/2021

import { all } from 'redux-saga/effects';
import { productSaga } from './productSaga';
export default function* rootSaga() {
  yield all([productSaga()]);
}