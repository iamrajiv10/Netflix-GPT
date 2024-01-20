import { IMG_CDN_URL } from "../Utils/constants";



const MovieCards = ({posterPath}) => {

    return(
        <div className="w-36
        md:w-48">
            <img 
            alt="Movie card" 
            src={IMG_CDN_URL+posterPath} />
        </div>
    )
};

export default MovieCards;