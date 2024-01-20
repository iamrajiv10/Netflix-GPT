import { BG_URL } from "../Utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    className="h-screen object-cover w-screen"
                    src={BG_URL}
                    alt="background" />
            </div>
            <div className="">

                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
};

export default GptSearch;