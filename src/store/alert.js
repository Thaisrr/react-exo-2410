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
            //alert_slice.caseReducers.deleteAlert(state);
        },
        deleteAlert : (state) => {
            console.log('in delete')
            state.text = '';
        }
    }
})

export const {create, deleteAlert} = alert_slice.actions;
export const {deleteAlert : testDelete} = alert_slice.actions;
export default alert_slice.reducer;