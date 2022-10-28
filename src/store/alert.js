import {createSlice} from "@reduxjs/toolkit";

export const alert_slice = createSlice({
    name: 'alert',
    initialState: {
        text: '',
        level: 'success'
    },
    reducers: {
        create : (state, action) => {
            const {txt = '', lvl = 'info', time = 3000} = action.payload;
            state.text = txt;
            state.level = lvl;
        },
        deleteAlert : (state) => {
            state.text = '';
        }
    }
})

export const {create, deleteAlert} = alert_slice.actions;
export default alert_slice.reducer;