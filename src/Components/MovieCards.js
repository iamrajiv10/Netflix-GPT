
import { API_OPTIONS, IMG_CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { toggleMovieDetail } from "../Utils/GptSlice"; 
import { addDetaildeMovie, addDetailedMovieData } from "../Utils/moviesSlice";
import Loading from "./Loading";
import { useState } from "react";



const MovieCards = ({posterPath, id}) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const getMovieDetail = async() => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+id, 
            API_OPTIONS);
        const json = await data.json();
        dispatch(addDetailedMovieData(json)); 
    };

    const handleMovieClick = () => {
        dispatch(addDetaildeMovie(id));
        getMovieDetail();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(toggleMovieDetail());
        },2000)
    };

    

    return(
        <div className="w-36
        md:w-48"
        onClick={handleMovieClick}
        >
            <img 
            alt="Movie card" 
            src={IMG_CDN_URL+posterPath} />

            {loading && <Loading />}
        </div>
    )
};

export default MovieCards;