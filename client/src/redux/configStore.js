// create by DungTMc on 15/9/2021
//Khởi tạo store


import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from '../saga';
import { loginSuccess } from './login/loginSlice';
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const rootReducer = {
   loginSuccess,
}

const store = configureStore({
    reducer: rootReducer,
    middleware
})
sagaMiddleware.run(rootSaga);

export default store;