// create by DungTMc on 15/9/2021

import { takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

export const addProductAsync = createAction('products/addProduct');

function* addProductSaga(action) {
    
}

export function* productSaga() {
  yield takeLatest(addProductAsync, addProductSaga);
}