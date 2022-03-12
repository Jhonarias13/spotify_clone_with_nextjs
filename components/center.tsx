import { signOut, useSession } from "next-auth/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useEffect } from "react";
const { shuffle } = require('lodash');
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atom/playlistAtom";
import UseSpotify from "../hooks/useSpotify";
import Songs from "./songs";

const colors = [
  "from-indigo-500",
  "from-yellow-500",
  "from-green-500",
  "from-red-500",
  "from-blue-500",
  "from-orange-500",
  "from-purple-500",
  "from-pink-500",
  "from-gray-500",
];

export default function Center() {
  const { data: session } = useSession();
  const spotifyApi = UseSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data: any) => {
        setPlaylist(data.body);
      })
      .catch((err: any) => {
        console.log('ups ocurrio un error', err);
      })
  }, [spotifyApi, playlistId]);

  console.log('playlist =>', playlist);

  return (
    <div className="flex-grow h-screen overflow-y-scroll">
      <header className="absolute right-8 top-8">
        <div className="flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={signOut}>
          <img className="rounded-full w-10 h10" src={session?.user?.image} />
          <h2>{session?.user?.name}</h2>
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>

        <img className="w-44 h-44 shadow-2xl rounded-md" src={playlist?.images?.[0]?.url} />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
        </div>

      </section>

      <div>
        <Songs />
      </div>
    </div>
  )
}