import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const tvSeries = useSelector((store) => store.tvSeries)
    return (
        movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className="mt-0 relative z-20
            md:-mt-52">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> */}
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Airing Today Tv Series"} movies={tvSeries.airingTodayTvSeries} />
            <MovieList title={"Popular Tv Series"} movies={tvSeries.popularTvSeries} />
            {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;