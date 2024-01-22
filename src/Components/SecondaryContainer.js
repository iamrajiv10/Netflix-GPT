import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loading from "./Loading";



const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const tvSeries = useSelector((store) => store.tvSeries)
    return (
        movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className="mt-0 relative z-20
            md:-mt-52">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Comedy"} movies={movies.comedyMovies} />
            <MovieList title={"Animation"} movies={movies.animationMovies} />
            <MovieList title={"Romantic"} movies={movies.romanticMovies} />
            <MovieList title={"Horror"} movies={movies.horrorMovies} />
            <MovieList title={"Documentry"} movies={movies.documentryMovies} />
            <MovieList title={"SciFi"} movies={movies.siFiMovies} />
            <MovieList title={"War"} movies={movies.warMovies} />


            <MovieList title={"Airing Today Tv Series"} movies={tvSeries.airingTodayTvSeries} />
            <MovieList title={"Popular Tv Series"} movies={tvSeries.popularTvSeries} />
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;