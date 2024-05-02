

const VideoTitle = ({title,overview}) => {
  return (
    <div className="p-[15%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black space-y-10">
        
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="md:w-1/4 w-1/2 text-xl">{overview}</p>
        <div className="space-x-4">
            <button className="py-2 px-4 text-black bg-white" >Play Now</button>
            <button className="py-2 px-4 bg-slate-400">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;