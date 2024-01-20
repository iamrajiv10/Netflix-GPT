import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return <h1>Got Nothing</h1>;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;
    return (
        <div className="pt-32 bg-black
        md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;