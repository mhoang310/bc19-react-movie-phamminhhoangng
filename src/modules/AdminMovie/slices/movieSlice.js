import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieAPI from "../../../apis/movies"

const initialState = {
    movie: [],
    isLoading: false,
    error: null,
};

export const createMovie = createAsyncThunk(
    "admin/movies/createMovie",
    async (movie) => {
        await movieAPI.createMovie(movie);
        return null;
    }
);

const movieSlice = createSlice({
    name: "admin/movies",
    initialState,
    extraReducers: {},
});

export default movieSlice.reducer;