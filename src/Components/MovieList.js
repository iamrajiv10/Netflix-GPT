
import MovieCards from "./MovieCards";

const MovieList = ({title,movies}) => {
    return (
        <div className="px-6 text-white">
            <h1 className="text-xl py-2 pt-6 
            md:text-3xl">{title}</h1>
        <div className="flex overflow-x-scroll ">
            <div className="flex gap-2">
                {movies?.map((movie)=> (
                <MovieCards key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
        </div>
    )
};

export default MovieList;