import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWarMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useWarMovies = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    const warMovies = useSelector(store => store.movies.warMovies)

    const getWarMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&with_genres=10752', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addWarMovies(json.results));
    };

    useEffect(() => {
        !warMovies &&
        getWarMovies();
    },[]);
};

export default useWarMovies;