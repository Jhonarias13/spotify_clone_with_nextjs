import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from "@heroicons/react/outline";
import { signOut, useSession } from 'next-auth/react'


function Sidebar() {
  const { data: session, status } = useSession();
  console.log('sesssion =>', session)

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
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
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
      </div>
    </div>

  )
}

export default Sidebar