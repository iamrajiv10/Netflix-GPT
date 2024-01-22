import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addDetailedMovieData } from "../Utils/moviesSlice";


const useMovieDetails = (id) => {
    const dispatch = useDispatch();
 
    const getMovieDetail = async() => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+id, 
            API_OPTIONS);
        const json = await data.json();
        dispatch(addDetailedMovieData(json)); 
    };
    useEffect(() => {
        getMovieDetail();
    },[]);
};

export default useMovieDetails;