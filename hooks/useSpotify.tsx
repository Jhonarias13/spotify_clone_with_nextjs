import { useEffect } from "react";
import { signIn, useSession } from 'next-auth/react';
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
})
function UseSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
    }

    spotifyApi.setAccessToken(session?.user?.accessToken);
  }, [session]);


  return spotifyApi;
}

export default UseSpotify