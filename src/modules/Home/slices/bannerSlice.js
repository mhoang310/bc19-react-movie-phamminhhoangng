import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as movieAPI from "../../../apis/movies"

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export const getBanners = createAsyncThunk(
    "home/banner/getBanners",
    async (_, { rejectWithValue }) => {
        // data của axios đã được format bên trong interceptor
        return await movieAPI.getBanners();

        // try {
        //   const {data} = await movieAPI.getBanners();
        //   return data.content;
        // } catch (error) {
        //   return rejectWithValue(error.response.data.content);
        // }
    }
);

const bannerSlice = createSlice({
    name: "home/banner",
    initialState,
    extraReducers: {
        [getBanners.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [getBanners.fulfilled]: (state, action) => {
            return { ...state, data: action.payload, isLoading: false };
        },
        [getBanners.rejected]: (state, action) => {
            console.log(action);
            return { ...state, error: action.error.message, isLoading: false };
        },
    },
});

export default bannerSlice.reducer;