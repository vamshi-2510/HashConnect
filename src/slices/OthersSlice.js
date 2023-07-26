import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getOthersData = createAsyncThunk('othersdata', async (userObj, thunkApi) => {

    let response = await axios.get("http://localhost:5000/requests/getOthersData/" + userObj.id)
    let data = response.data

    if (data.message == "no data  found") {

        return thunkApi.rejectWithValue(data)
    }
    if (data.message == "data found") {
        return data.payload;
    }

})

export const OthersSlice = createSlice({
    name: "others",
    initialState: {
        data: {},
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        isError: false,
        errMsg: ''
    },
    reducers: {
        clearData: (state) => {
            state.userData = null;
            state.isFulfilled = false;
            state.isError = false;
            state.isPending = false;
            state.isRejected = false;
        },
        removePendingRequest: (state, action) => {

            let i1 = -1
            for (let i = 0; i < state.data.PendingRequests.length; i++) {
                if (state.data.PendingRequests[i] == action.payload) {
                    i1 = i
                    break
                }
            }
            state.data.followers.push(state.data.PendingRequests[i1])
            state.data.PendingRequests.splice(i1, 1)
        },
        removePendingRequest1: (state, action) => {

            let i1 = -1
            for (let i = 0; i < state.data.PendingRequests.length; i++) {
                if (state.data.PendingRequests[i] == action.payload) {
                    i1 = i
                    break
                }
            }
            state.data.PendingRequests.splice(i1, 1)
        }
    },
    extraReducers: {
        //deal with pending
        [getOthersData.pending]: (state, action) => {
            state.isPending = true;
        },
        //deal with fulfilled
        [getOthersData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isFulfilled = true;
            state.isPending = false;
            state.isError = false;
            state.errMsg = ''
        },
        //deal with rejected
        [getOthersData.rejected]: (state, action) => {
            state.isError = true;
            state.errMsg = action.payload.message;
            state.isPending = false;
            state.userData = {}
        }

    }
})

export const { clearData, removePendingRequest,removePendingRequest1 } = OthersSlice.actions

export default OthersSlice.reducer