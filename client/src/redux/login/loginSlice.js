// create by DungTMc on 15/9/2021
import {createSlice} from '@reduxjs/toolkit'

const login = createSlice({
    name: 'login',
    initialState: [],
    reducers: {
        loginSuccess: (state,action) => {
            state.push(action)
        }
    },
})

const { reducer, actions } = login;
export const {loginSuccess} = actions;
export default reducer;