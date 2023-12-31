import { createSlice } from "@reduxjs/toolkit"
import { getAllPosts } from "./postsOperations"

const initialState = {
    posts:[]
}

const handlePending = (state) => {
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    console.log('eror', error.message)
    state.error = payload ?? error.message;
}

const handleFulfilledGetAllPosts = (state, { payload }) => {
    console.log('state', state)
    state.posts = payload;
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, handleFulfilledGetAllPosts )
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({type}) => type.endsWith('/rejected'), handleRejected)
    }
})

export const postsReducer = postsSlice.reducer