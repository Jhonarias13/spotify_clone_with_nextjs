import { useRecoilValue } from "recoil";
import { playlistState } from "../atom/playlistAtom";
import Song from "./song";


function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white flex flex-col space-y-1 pb-2 px-7">
      {playlist?.tracks.items.map((track: any, i: any) =>
      <Song key={track.track.id} track={track} order={i}/>
        )}
    </div>
  )

}

export default Songs;