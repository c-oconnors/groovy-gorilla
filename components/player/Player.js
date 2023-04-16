// Center of the app, where the user can play music
import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { ClockIcon, HeartIcon } from "@heroicons/react/outline";
import PlayerControls from './PlayerControls';
import TrackList from './TrackList';
import TrackListItem from './TrackListItem';

function Player() {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col w-full bg-white border-black border-4 border-opacity-100 shadow-groovy m-4">
      
      {/* Header */}
      <div className="basis-1/12 bg-groovyPink border-b-4 px-1 pt-1">
        <div className='flex'>
          <h1>Mixtape Title</h1>{/* Load Mixtape title */}
        </div>
      </div>

      {/* Featured section: Album Art, Artist Name, Song Title */}
      <div className="flex basis-3/12 flex-row justify-start">
        <img className="w-60 md:w-auto h-auto border-4 m-5" src="/gg-label.jpg" alt="" />
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