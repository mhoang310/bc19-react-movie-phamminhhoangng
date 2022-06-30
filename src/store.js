import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slices/bannerSlice";
import movieShowingSlice from "./modules/Home/slices/movieShowingSlice";
import authSlice from "./modules/Auth/slices/authSlice";
import adminMovieSlice from "./modules/AdminMovie/slices/movieSlice";

const store = configureStore({
    reducer: {
        banner: bannerSlice,
        movieShowing: movieShowingSlice,
        auth: authSlice,
        movie: adminMovieSlice,
    },
});

export default store;