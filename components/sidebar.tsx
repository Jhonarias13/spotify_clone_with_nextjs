import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
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


  console.log('le diste click a este link ==>', playlistId);

  useEffect(() => {
    if (SpotifyApi.getAccessToken()) {
      SpotifyApi.getUserPlaylists().then((data: any) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, SpotifyApi])

  return (
    <div className="text-gray-500 p-5 text-sm lg:text-xs border-r border-gray-900 overflow-y-scroll h-screen sm:max-w-[12rem] lg:max-w-[15rem]">
      <div className="space-y-3">
        <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut({ callbackUrl: '/' })}>
          <HomeIcon className="h-5 w-5" />
          <p>Log out</p>
        </button>
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
          <p
            key={playlist.id}
            onClick={() => { setPlaylistId(playlist.id) }}
            className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}

      </div>
    </div>

  )
}

export default Sidebar