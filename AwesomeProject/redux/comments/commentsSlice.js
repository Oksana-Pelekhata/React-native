import { createSlice } from "@reduxjs/toolkit"
import { getAllComments } from "./commentsOperations";

const initialState = {
    comments:[]
}

const handlePending = (state) => {
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    console.log('eror', error.message)
    state.error = payload ?? error.message;
}

const handleFulfilledGetAllComments = (state, { payload }) => {
    console.log('state', state)
    state.comments = payload;
}

const postsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllComments.fulfilled, handleFulfilledGetAllComments )
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const CommentsReducer = commentsSlice.reducer