import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";


const SecondaryConatiner = () => {
  const movies=useSelector((store)=>store?.movies);
   
  console.log(movies)
  return (
   movies.nowPlayingMovies&& movies.topRatedMovies && movies.popularMovies&&movies.upComingMovies&& (<div className=" bg-black ">
      
    <div className=" -mt-64 relative z-10">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MoviesList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MoviesList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
        <MoviesList title={"UpComing Movies"} movies={movies?.upComingMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryConatiner