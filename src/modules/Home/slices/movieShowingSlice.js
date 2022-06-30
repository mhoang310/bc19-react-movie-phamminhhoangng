import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as movieAPI from "../../../apis/movies"

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export const getMovieShowing = createAsyncThunk(
    "home/movieShowing/getMovies",
    async () => {
        return await movieAPI.getMovies();        
    }
);

const movieShowingSlice = createSlice({
    name: 'home/movieShowing',
    initialState,
    extraReducers: {
        [getMovieShowing.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [getMovieShowing.fulfilled]: (state, action) => {
            return { ...state, isLoading: false, data: action.payload };
        },
        [getMovieShowing.rejected]: (state, action) => {
            return { ...state, isLoading: false, error: action.error.message };
        },
    },
});

export default movieShowingSlice.reducer;