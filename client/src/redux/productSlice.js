// create by DungTMc on 15/9/2021
import {createSlice} from '@reduxjs/toolkit'

const product = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state,action) => {
            state.push(action)
        }
    },
})

const { reducer, actions } = product;
export const {addProduct} = actions;
export default reducer;