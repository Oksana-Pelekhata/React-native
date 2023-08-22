import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

const initialState = {
    username: null,
    email: null,
    isLoggedIn: false,
    uid: null,
    error: '',
    isLoading: false,
};

const handleFulfilledRegister = (state, { payload }) => {
    state.username = payload.userName;
    state.email = payload.userEmail;
    state.isLoggedIn = true;
    state.uid = payload.uid;
    state.isLoading = false;
};

const handleFulfilledLogin = (state, { payload }) => {
    console.log('state', state)
    console.log('payload', payload)
    state.username = payload.userName;
    state.email = payload.userEmail;
    state.uid = payload.uid;
    state.isLoggedIn = true;
    state.isLoading = false;
};

const handleFulfilledLogout = state => {
    state.username = null;
    state.email = null;
    state.isLoggedIn = false;
    state.uid = null;
    state.isLoading = false;
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    console.log('eror', error.message)
    state.isLoading = false;
    state.error = payload ?? error.message;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, handleFulfilledRegister )
            .addCase(logIn.fulfilled, handleFulfilledLogin)
            .addCase(logOut.fulfilled, handleFulfilledLogout)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const authReducer = authSlice.reducer

