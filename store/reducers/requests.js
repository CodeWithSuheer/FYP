import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API URL
const createRequestUrl = "http://localhost/pick_and_drop_app/ride_request.php";
const getRequestUrl = "http://localhost/pick_and_drop_app/ride_request.php";
const updateRequestUrl = "http://localhost/pick_and_drop_app/ride_request.php";



//CREATE REQUESTS ASYNC THUNK
export const createRequestAsync = createAsyncThunk("req/create", async (requestData) => {
    try {
        const response = await axios.post(createRequestUrl, requestData);
        console.log('response', response);
        return response.data;

    } catch (error) {
        console.log('error', error.response);
        throw error;
    }
});


//GET REQUESTS ASYNC THUNK
export const getRequestAsync = createAsyncThunk("req/get", async () => {
    try {
        const response = await axios.get(getRequestUrl);
        console.log(response.data);
        return response.data.data;

    } catch (error) {
        console.log(error.response);
    }
});


// UPDATE REQUESTS ASYNC THUNK
export const updateRequestAsync = createAsyncThunk("req/update", async ({ id, status }) => {
    try {
        const response = await axios.put(updateRequestUrl, { id, status });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error.response.data);
        throw error;
    }
});








// INITIAL STATE
const initialState = {
    createRequest: null,
    requests: [],
    loading: false,
};



const requests = createSlice({
    name: "requests",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createRequestAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createRequestAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.createRequest = action.payload;
            })
            .addCase(createRequestAsync.rejected, (state, action) => {
                state.loading = false;
            })


            // getRequestAsync
            .addCase(getRequestAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getRequestAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.requests = action.payload;
            })


            .addCase(updateRequestAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateRequestAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.requests = action.payload;
            })



    }
})

export default requests.reducer;


