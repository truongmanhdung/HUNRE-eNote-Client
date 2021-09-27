// create by DungTMc on 15/9/2021
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {postLogin} from "../../apis/authApi";

const login = createSlice({
    name: 'login',
    initialState: [],
    reducers: {
        loginSuccess: (state,action) => {
            state.push(action)
        }
    },
})
export const loginUser = createAsyncThunk(
    'login/loginUser', async (user) => {
        try {
            const { res } = await postLogin(user);
            console.log(res)
        } catch (error) {
            return error.response.data
        }
    }
)

const { reducers, actions } = login;
export const {loginSuccess} = actions;
export default reducers;