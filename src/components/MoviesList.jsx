import MovieCards from "./MovieCards"



const MoviesList = ({title,movies}) => {

  return (
    <div className="px-12 py-6">
    <h1 className="text-white text-2xl p-2">{title}</h1>
    <div className="flex overflow-x-scroll " >
        
        
        <div className="flex">
        {movies.map((card)=>(<MovieCards key={card.id} poster={card.poster_path}/>
        ))}
        </div>
    </div>
    </div>
    
  )
}

export default MoviesList