import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
    const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();

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