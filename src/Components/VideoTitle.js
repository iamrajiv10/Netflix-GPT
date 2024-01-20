
const VideoTitle = ({title, overview}) => {
    return(
        <div className="absolute mt-[20%] mx-4 p-4 text-white bg-gradient-to-r from-black w-2/5 rounded-3xl rounded-e-full
        md:mx-12">
            <h1 className="text-2xl font-bold
            md:text-5xl">{title} </h1>
            <p className="hidden py-6 text-lg font-semibold w-3/4
            md:inline-block">
                {overview} </p>
            <div className="my-2">
                <button className="bg-white text-black p-1 px-3 md:p-2 md:px-10 text-xl font-bold rounded-lg hover:opacity-70 ">▷ Play</button>
                <button className="hidden md:inline-block mx-4 bg-slate-700 text-white p-2 px-10 text-xl font-bold rounded-lg hover:opacity-80">More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;