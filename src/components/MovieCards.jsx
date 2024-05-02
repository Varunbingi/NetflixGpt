import { IMG_CDN_URL } from "../utils/constants"


const MovieCards = ({poster}) => {
    
  return (
    <div className=" w-40 pr-4">
        <img className="w-40" alt="moviesPoster" src={IMG_CDN_URL+poster} />
    </div>
  )
}

export default MovieCards