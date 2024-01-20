import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import { useRef } from "react";
// import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/GptSlice";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async(movie)=> {
        const data = await fetch(
        'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', 
        API_OPTIONS);
            const json = await data.json();

            return json.results;
    }

    // const handleGptSearchClick = async () => {
    //     console.log(searchText.current.value);
    //     // Make an API call to GPT API  and get Movie Results

    //     const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies,  comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Elemental"

    //     const gptResults = await openai.chat.completions.create({
    //         messages: [{ role: 'user', content: gptQuery }],
    //         model: 'gpt-3.5-turbo',
    //       });
    //       console.log(gptResults.choices?.[0]?.message?.content);
    //       // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Golmal, Padosan
    //       const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //       const promiseArray  = gptMovies.map(movie => searchMovieTMDB(movie));
    //       // the result is [promise, promise, promise, promise, promise]

    //       const tmdbResults = await Promise.all(promiseArray);  // Promise.all the array of Promises

    //       dispatch(addGptMovieResult(tmdbResults));
    // };

    const handleGptSearchClickk = async() => {
        const searchValue = searchText.current.value ;
        const data = await searchMovieTMDB(searchValue);
        
        dispatch(addGptMovieResult({movieName: searchValue, movieResults: data}));
    };

    return (
        <div className="pt-36 flex justify-center">
            <form className="w-5/6 bg-black grid grid-cols-12
            md:w-3/5"
            onSubmit={(e)=> e.preventDefault()}>
                <input ref={searchText}
                type="text" 
                className="p-4 m-4 col-span-9 " 
                placeholder={lang[langKey].gptSearchPlaceholder} 
                />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                onClick={handleGptSearchClickk}>
                    {lang[langKey].search}
                    </button>
            </form>
        </div>
    )
};

export default GptSearchBar;