import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        
        comedyMovies: null,
        animationMovies: null,
        romanticMovies: null,
        horrorMovies: null,
        documentryMovies: null,
        siFiMovies: null,
        warMovies: null,

        trailerVideo: null,
        detailedMovie: null,
        detailedMovieData: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addComedyMovies: (state,action) => {
            state.comedyMovies = action.payload
        },
        addAnimationMovies: (state,action) => {
            state.animationMovies = action.payload
        },
        addRomanticMovies: (state,action) => {
            state.romanticMovies = action.payload
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload;
        },
        addDocumentryMovies: (state,action) => {
            state.documentryMovies = action.payload
        },
        addSiFiMovies: (state,action) => {
            state.siFiMovies = action.payload
        },
        addWarMovies: (state,action) => {
            state.warMovies = action.payload
        },



        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addDetaildeMovie: (state, action) => {
            state.detailedMovie = action.payload
        },
        addDetailedMovieData: (state, action) => {
            state.detailedMovieData = action.payload
        }
    },
});

export const {addNowPlayingMovies, addPopularMovies,addComedyMovies, addAnimationMovies,
    addRomanticMovies, addHorrorMovies, addDocumentryMovies, addSiFiMovies, addWarMovies,
    addTrailerVideo, addDetaildeMovie, addDetailedMovieData} =  moviesSlice.actions;
export default moviesSlice.reducer;