import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tvSeries",
    initialState: {
        airingTodayTvSeries: null,
        popularTvSeries: null,
        onTheAirTvSeries: null,
    },
    reducers: {
        addAiringTodayTvSeries: (state,action) => {
            state.airingTodayTvSeries = action.payload;
        },
        addPopularTvSeries: (state, action) => {
            state.popularTvSeries = action.payload
        }
    }
});

export const {addAiringTodayTvSeries} = tvSlice.actions;
export default tvSlice.reducer;