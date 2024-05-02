import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPalyingMovies=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await response.json();
        dispatch(addNowPlayingMovies(json?.results))
    }
    useEffect(()=>{
        getNowPalyingMovies();
    },[])
}
export default useNowPlayingMovies;