import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";

export default function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  
  console.log("You picked playlist: ", playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });  
    } 
  }, [session, spotifyApi]);

  console.log(playlists);
  return (
    <div  className="bg-white max-h-full border-4 shadow-groovy overflow-auto scrollbar-hide m-4 w-full">
      <div className="bg-groovyPink px-1 pt-1 border-black border-b-4">
        <h2 className="text-3xl font-bold">Mixtapes</h2>
      </div>
      <div className="overflow-auto">
        <div className="overflow-auto p-1">
          {playlists.map((playlist) => (
            <div className="m-1 hover:bg-groovyBlue hover:text-white ease-linear duration-100  hover:border-black">
              <p key={playlist.id} onClick={() => setPlaylistId(playlist.id)} className="cursor-pointer px-1 lg:text-lg md:text-md sm:text-sm">{playlist.name}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
