import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getPostsData = createAsyncThunk('postsdata', async (userObj, thunkApi) => {
        

        let response = await axios.get("http://localhost:5000/posts/getPosts/"+userObj.id)
        let data = response.data
    
        if(data.message=="something went wrong")
        {
            
            return thunkApi.rejectWithValue(data)
        }
        if(data.message=="posts found"){
            return data.payload;
        }

})

export const postsSlice=createSlice({
    name:"posts",
    initialState:{
        postsData:{},
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        isError:false,
        errMsg:''
    },
    reducers:{
        clearData:(state)=>{
        state.postsData={};
        state.isFulfilled=false;
        state.isError=false;
        state.isPending=false;
        state.isRejected=false;
        }
    },
    extraReducers:{
         //deal with pending
    [getPostsData.pending]: (state, action) => {
        state.isPending = true;
    },
    //deal with fulfilled
    [getPostsData.fulfilled]: (state, action) => {
        state.postsData = action.payload;
        state.isFulfilled = true;
        state.isPending = false;
        state.isError = false;
        state.errMsg = ''
    },
    //deal with rejected
    [getPostsData.rejected]: (state, action) => {
        state.isError = true;
        state.errMsg = action.payload.message;
        state.isPending = false;
        state.postsData = {}
    }

    }
})

export const {clearData}=postsSlice.actions 

export default postsSlice.reducer