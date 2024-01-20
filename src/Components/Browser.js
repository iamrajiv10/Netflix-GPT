import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useAiringTvSeries from "../hooks/useAiringTvSeries";
import usePopularTvSeries from "../hooks/usePopularTvSeries";

const Browser = () => {
    const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useAiringTvSeries();
    usePopularTvSeries();

    return (
        <div>
            <Header />
            {ShowGptSearch ? (<GptSearch />) :
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )}

        </div>
    )
}

export default Browser;