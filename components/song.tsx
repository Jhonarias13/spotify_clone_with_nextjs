import UseSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "./../integrations/time";

function Song({ order, track }: any) {
  const spotifyApi = UseSpotify();

  return (
    <div className="hover:bg-gray-900 p-2 rounded-md cursor-pointer grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p className="text-gray-500 text-sm">{order + 1}</p>
        <img className="h-10 w-10 rounded-md" src={track.track.album.images[0].url} />
        <div>
          <p className="text-sm">{track.track.name}</p>
          <small className="text-gray-500 text-xs hover:text-gray-200">{track.track.artists[0].name}</small>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 text-sm text-gray-500">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p className="hidden md:inline text-center">{track.added_at}</p>
        <p className="text-right">{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}


export default Song;