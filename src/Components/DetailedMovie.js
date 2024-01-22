import { useSelector } from "react-redux";
import Header from "./Header";
import VideoBackground from "./VideoBackground";
import { IMDB_LOGO, IMG_CDN_URL, LOGO } from "../Utils/constants";

const DetailedMovie = () => {
    const movies = useSelector((store) => store.movies);
    const id = movies.detailedMovie
    const md = movies.detailedMovieData

    const totalMinutes = md.runtime;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (!md) return null;

    return (
        <div className="bg-slate-700 h-full">
            <Header />
            <div className="pt-40 pb-10 mx-[10%]">
                <div className="flex justify-between pb-2">
                    <div>
                        <h1 className="text-white font-bold text-4xl">{md.title} </h1>
                        <div className="flex gap-4">
                            <p className="text-white">{md.status} </p>
                            <p className="text-white">{`${hours}h ${minutes}m`} </p>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white font-bold">Release Date</h6>
                        <p className="text-white text-right">{md.release_date} </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-[35%] shadow-white shadow-sm">
                        <img className="w-full h-full"
                            alt="Movie card"
                            src={IMG_CDN_URL + md.poster_path} />
                    </div>
                    <div className="w-full shadow-white shadow-sm">
                        <VideoBackground movieId={id} />
                    </div>
                </div>
                <div className="pt-4 flex gap-3">
                    {md.genres?.map((genre) => (
                        <div className="p-1 px-4 border border-white rounded-xl text-white font-bold"
                        key={genre.id}>{genre.name} </div>
                    ))}
                </div>
                <div className="pt-4 grid grid-cols-12">
                    <div className="col-span-7 pe-4">
                    <h6 className="text-white text-lg font-semibold py-3">{md.overview} </h6>
                    <hr />
                    <div className="py-3">
                    <h6 className="text-white text-lg font-semibold ">Production Companies:</h6>
                    <div className=" flex gap-3">
                        {md.production_companies?.map((genre) => (
                        <p className=" text-blue-300 font-semibold"
                        key={genre.id}>{genre.name} ,</p>
                    ))}
                    </div>
                    </div>
                    <hr/>
                    <div className="py-3">
                    <h6 className="text-white text-lg font-semibold ">Production Country:</h6>
                    <div className=" flex gap-3">
                        {md.production_countries?.map((genre) => (
                        <p className=" text-blue-300 font-semibold"
                        key={genre.name}>{genre.name} ,</p>
                    ))}
                    </div>
                    </div>
                    <hr/>
                    </div>


                    <div className="col-span-5 py-2 ps-32">
                        <h6 className="text-white text-lg font-semibold pb-5">{md.tagline}<hr/> </h6>
                        <h6 className="text-yellow-500 font-semibold pb-3">STREAMING</h6>
                        <div className="flex gap-10">
                        <div className="bg-black w-40 border border-white rounded-md" >
                        <a href={md.homepage} target="_blank" rel="noopener noreferrer">
                            <img alt="logo" src={LOGO} /></a>
                        </div>
                        <div className="w-40 flex justify-center items-center bg-white border border-black rounded-md" >
                        <a href={ "https://www.imdb.com/title/"+md.imdb_id} target="_blank" rel="noopener noreferrer">
                            <img className="rounded-md w-32" alt="logo" src={IMDB_LOGO} /></a>
                        </div>
                        </div>
                        <div className="flex pt-8 justify-between" >
                        <p className=" text-blue-300 font-semibold">
                            {md.popularity} <br/><span className="text-blue-300 font-normal">Popularity</span> </p>
                        <p className=" text-blue-300 font-semibold">
                            {md.vote_count} <br/><span className="text-blue-300 font-normal">Vote Count</span> </p>
                        <p className=" text-blue-300 font-semibold">
                            {md.vote_average} <br/><span className="text-blue-300 font-normal">Vote Average</span> </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default DetailedMovie;