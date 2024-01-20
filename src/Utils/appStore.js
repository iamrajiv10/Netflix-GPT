import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            tvSeries: tvSeriesReducer,
            gpt: gptReducer,
            config: configReducer,
        },
    }
);

export default appStore;