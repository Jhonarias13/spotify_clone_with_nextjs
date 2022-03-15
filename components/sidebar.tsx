import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LoginIcon
} from "@heroicons/react/outline";

import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atom/playlistAtom";
import UseSpotify from "../hooks/useSpotify";

function Sidebar() {
  const SpotifyApi = UseSpotify();
  const { data: session, status } = useSession();
  const [playlist, setPlaylists] = useState([false]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);


  let saveLocalStorage = (id: string) => {
    localStorage.setItem('playlist', String(id));
  }

  useEffect(() => {
    if (SpotifyApi.getAccessToken()) {
      SpotifyApi.getUserPlaylists().then((data: any) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, SpotifyApi])

  return (
    <div className="text-gray-500 p-5 text-sm lg:text-xs border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
      <div className="space-y-3">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* playlist... */}
        {playlist.map((playlist: any) => (
          <div key={playlist.id} onClick={() => { setPlaylistId(playlist.id), saveLocalStorage(playlist.id) }} className="flex cursor-pointer hover:text-white items-center">
            <img className="md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full mr-1.5" src={playlist?.images?.[0]?.url} />
            <p
              className=" line-clamp-2">
              {playlist.name}
            </p>
          </div>
        ))}

      </div>
    </div>

  )
}

export default Sidebar