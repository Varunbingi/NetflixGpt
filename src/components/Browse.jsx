
import useNowPlayingMovies from "../hooks/useNoePlayingMovies";
import Header from "./Header";


const Browse=()=>{
    useNowPlayingMovies();
    
    return(
        <>
        <Header/>
        
        </>
    )
}
export default Browse;