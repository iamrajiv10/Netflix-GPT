import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocumentryMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";


const useDocumentryMovies = () => {
    // Fetch Data from TMDB API  and update store
    const dispatch = useDispatch();

    const documentryMovies = useSelector(store => store.movies.documentryMovies)

    const getDocumentryMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&with_genres=99', 
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addDocumentryMovies(json.results));
    };

    useEffect(() => {
        !documentryMovies &&
        getDocumentryMovies();
    },[]);
};

export default useDocumentryMovies;