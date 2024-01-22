import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSiFiMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useSiFiMovies = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    const siFiMovies = useSelector(store => store.movies.siFiMovies)

    const getSiFiMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&with_genres=878', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addSiFiMovies(json.results));
    };

    useEffect(() => {
        !siFiMovies &&
        getSiFiMovies();
    },[]);
};

export default useSiFiMovies;