// Center of the app, where the user can play music
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import PlayerControls from './PlayerControls';
import TrackList from './TrackList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../../atoms/playlistAtom';
import useSpotify from '../../hooks/useSpotify';

function Player() {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi
    .getPlaylist(playlistId)
    .then((data) => {
      setPlaylist(data.body);
    })
    .catch((err) => console.log("Something went wrong!", err));
  },[spotifyApi, playlistId])
  
  return (
    <div className="flex flex-col w-full bg-white border-black border-4 border-opacity-100 shadow-groovy m-4">
      
      {/* Header */}
      <div className="basis-1/12 bg-groovyPink border-b-4 px-1 pt-1">
        <div className='flex'>
          <h1 className='text-3xl font-bold'>{playlist?.name}</h1>{/* Load Mixtape title */}
        </div>
      </div>

      {/* Featured section: Album Art, Artist Name, Song Title */}
      <div className="flex basis-3/12 flex-row justify-start">
        <img className="w-60 h-60 border-4 shadow-groovy m-5" src={playlist?.images[0]?.url} alt="" />
        <div className="flex flex-col justify-center">
          <div className=""> 
            <h1>Song Title</h1>
          </div>
          <div className="text-groovyPurple">
            <h2>Artist Name</h2>
          </div>
          
        </div>
      </div>

      <TrackList /> 

    
      {/* Player Controls */}
      <div className='basis-1/12 border-t-4'>
        <div className="flex justify-center">
          <PlayerControls />
        </div>
      </div>

    </div>
      
      
      // {/* <div>Artist Info</div> */}

      
  )
}

export default Player