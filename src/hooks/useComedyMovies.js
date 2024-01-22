import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComedyMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useComedyMovies = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    const comedyMovies = useSelector(store => store.movies.comedyMovies)

    const getComedyMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&with_genres=35', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addComedyMovies(json.results));
    };

    useEffect(() => {
        !comedyMovies &&
        getComedyMovies();
    },[]);
};

export default useComedyMovies;