import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRomanticMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useRomanticMovies = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    const romanticMovies = useSelector(store => store.movies.romanticMovies)

    const getRomanticMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&with_genres=10749', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addRomanticMovies(json.results));
    };

    useEffect(() => {
        !romanticMovies &&
        getRomanticMovies();
    },[]);
};

export default useRomanticMovies;