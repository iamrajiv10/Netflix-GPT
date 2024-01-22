import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovie";
import useAiringTvSeries from "../hooks/useAiringTvSeries";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import DetailedMovie from "./DetailedMovie";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import useAnimationMovies from "../hooks/useAnimationMovies";
import useRomanticMovies from "../hooks/useRomanticMovies";
import useDocumentryMovies from "../hooks/useDocumentryMovies";
import useSiFiMovies from "../hooks/useSiFiMovies";
import useWarMovies from "../hooks/useWarMovies";

const Browser = () => {
    const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const MovieDetails = useSelector((store) => store.gpt.showMovieDetail);
    useNowPlayingMovies();
    usePopularMovies();
    useComedyMovies();
    useAnimationMovies();
    useRomanticMovies();
    useHorrorMovies();
    useDocumentryMovies();
    useSiFiMovies();
    useWarMovies();

    useAiringTvSeries();
    usePopularTvSeries();

    return (
        <div>
            <Header />
            {MovieDetails ? (
                <DetailedMovie />
            ) : (
                <>
                    {ShowGptSearch ? (
                        <GptSearch />
                    ) : (
                        <>
                            <MainContainer />
                            <SecondaryContainer />
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Browser;