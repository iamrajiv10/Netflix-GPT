import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
    const {movieName, movieResults} = useSelector(store => store.gpt);
 console.log(movieName, movieResults);
    if(!movieName) return null;
    return (
        <div className="p-4 bg-black bg-opacity-80">
            <MovieList title={movieName} movies={movieResults} />
        </div>
    )
};

export default GptMovieSuggestion;