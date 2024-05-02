
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";


const Browse=()=>{
    useNowPlayingMovies();
    
    return(
        <>
        <Header/>
        <MainContainer/>
        <SecondaryConatiner/>
        
        </>
    )
}
export default Browse;