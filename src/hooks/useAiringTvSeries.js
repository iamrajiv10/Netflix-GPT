import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayTvSeries } from "../Utils/tvSeriesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useAiringTvSeries = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    // const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getAiringTodayTvSeries = async () => {
        const data = await fetch(
        'https://api.themoviedb.org/3/tv/airing_today?page=1', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addAiringTodayTvSeries(json.results));
    };

    useEffect(() => {
        // !nowPlayingMovies &&
        getAiringTodayTvSeries();
    },[]);
};

export default useAiringTvSeries;