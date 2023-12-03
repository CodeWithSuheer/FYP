import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";


//API URL
const signupUrl = "http://localhost/pick_and_drop_app/formdata";
// const getUserUrl = "http://localhost:3000/api/getUser";
const loginUrl = "http://localhost/pick_and_drop_app/login.php";
const logoutUrl = "http://localhost/pick_and_drop_app/logout.php";
// const validateTokenUrl = "http://localhost:3000/api/validateToken";
const serviceProviderUrl = "http://localhost/pick_and_drop_app/getServiceProviders.php";



//CREATE ASYNC THUNK
export const createuserAsync = createAsyncThunk("user/create", async (formData) => {
    try {
        const response = await axios.post(signupUrl, formData);
        return response.data;

    } catch (error) {
        console.log('error', error.response.data);
    }
});


// lOGIN ASYNC THUNK 
export const loginuserAsync = createAsyncThunk("user/login", async (logData) => {
    try {
        const response = await axios.post(loginUrl, logData);
        // const token = response.data.accessToken;
        // Cookies.set(
        //     "token", token
        // )
        // console.log("auth", response.data);
        return response.data;

    } catch (error) {
        console.log('error', error.response.data);
    }
});


// lOGOUT ASYNC THUNK 
export const logoutuserAsync = createAsyncThunk("user/logout", async () => {
    try {
        const response = await axios.post(logoutUrl);
        // console.log(response.data);
        return response.data;

    } catch (error) {
        console.log('error', error.response.data);
    }
});




// SERVICE PROVIDER ASYNC THUNK 
export const serviceProviderAsync = createAsyncThunk("user/getServiceProvider", async () => {
    try {
        const response = await axios.get(serviceProviderUrl);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log('error', error.response.data);
    }
});






const savedUser = JSON.parse(localStorage.getItem("user"));

// INITIAL STATE
const initialState = {
    createUser: null,
    user: null,
    userDetails: null,
    isAuthenticated: false,
    loading: false,
    logoutUser: null,
    clearUser: null,
    forgetPasswordEmail: null,
    resetPassword: null,
    validateToken: null,
    serviceProviderData: null,
};



const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            Cookies.remove("token");
        },
    },
    extraReducers: (builder) => {
        builder

            // createuserAsync
            .addCase(createuserAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createuserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.createUser = action.payload;
            })

            // loginuserAsync
            .addCase(loginuserAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginuserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.userDetails = action.payload.userDetails;
                state.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })

            // logoutuserAsync
            .addCase(logoutuserAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logoutuserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.logoutUser = action.payload;
                state.user = null;
                state.userDetails = null;
                state.isAuthenticated = false;
                localStorage.removeItem('user');
            })


            // serviceProviderAsync
            .addCase(serviceProviderAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(serviceProviderAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.serviceProviderData = action.payload.serviceProviders;
            })
    }
})


export const { clearUser } = authSlice.actions;

export default authSlice.reducer;