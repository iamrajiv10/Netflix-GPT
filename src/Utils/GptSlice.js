import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieName: null,
        movieResults: null,
        showMovieDetail: false,
    },
    reducers: {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action) => {
            const {movieName, movieResults} = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        },
        toggleMovieDetail: (state) => {
            state.showMovieDetail = !state.showMovieDetail;
        }
    },
});

export const {toggleGptSearchView, addGptMovieResult, toggleMovieDetail} = gptSlice.actions;

export default gptSlice.reducer;