// import { createSlice } from "@reduxjs/toolkit";

// const tvSlice = createSlice({
//     name: "tvSeries",
//     initialState: {
//         airingTodayTvSeries: null,
//         popularTvSeries: null,
//         onTheAirTvSeries: null,
//     },
//     reducers: {
//         addAiringTodayTvSeries: (state,action) => {
//             state.airingTodayTvSeries = action.payload;
//         },
//         addPopularTvSeries: (state, action) => {
//             state.popularTvSeries = action.payload
//         },
//         addOnTheAirTvSeries: (state, action) => {
//             state.onTheAirTvSeries = action.payload
//         }
//     }
// });

// export const {addAiringTodayTvSeries, addPopularTvSeries, addOnTheAirTvSeries} = tvSlice.actions;
// export default tvSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
    name: "tvSeries",
    initialState: {
        airingTodayTvSeries: null,
        popularTvSeries: null,
        onTheAirTvSeries: null,
    },
    reducers: {
        addAiringTodayTvSeries: (state, action) => {
            state.airingTodayTvSeries = action.payload;
        },
        addPopularTvSeries: (state, action) => {
            state.popularTvSeries = action.payload;
        },
        addOnTheAirTvSeries: (state, action) => {
            state.onTheAirTvSeries = action.payload;
        }
    },
});

export const {addAiringTodayTvSeries, addOnTheAirTvSeries, addPopularTvSeries} =  tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;