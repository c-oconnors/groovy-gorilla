import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../../atoms/playlistAtom';
import { ClockIcon, HeartIcon } from "@heroicons/react/outline";
import { FaPlay } from 'react-icons/fa';
import useSpotify from '../../hooks/useSpotify';
import { millisToMinutesAndSeconds } from '../../lib/time';

function TrackListItem({ order, track }) {
  const playlist = useRecoilValue(playlistState)
  const spotifyApi = useSpotify();
  return (
    
    <div className="mx-4 hover:bg-groovyBlue ease-linear duration-300 hover:text-white">
      <div className="flex flex-row p-2 cursor-default">
        <div className="flex justify-start basis-1/2 space-x-2">
          
          {/* Track number */}
          {/* TODO: onHover show play icon */}
          <div className="flex flex-col w-5 h-5 my-auto">
            <div className="text-sm text-black justify-center">
              <p>{order +1}</p>
            </div>
          </div>

          <div className="flex flex-row basis-1/2 overflow-hidden">

            {/* Album art */}
            <div>
              <img className="w-10 h-auto" src={track.track.album.images[0].url} alt="" />
            </div>
            
            
            <div className="flex flex-col justify-center px-2 max-w-full overflow-hidden">
              
              {/* Track name */}
              <div className="flex text-sm w-full max-w-full">
                <p className='truncate'>{track.track.name}</p>
              </div>
              
              {/* Artist name */}
              <div className="flex text-xs text-groovyPurple ">
                <p className='truncate'>{track.track.artists[0].name}</p>
              </div>
            </div>

          </div>
        </div>
        {/* Album Name */}
        <div className="flex flex-col justify-center basis-1/4 text-xs m-y-auto truncate">
          <p className='truncate text-groovyPurple'>{track.track.album.name}</p>
        </div>
       
        {/* TODO: onClick add to signed in user's playlist + change to solid Heart Icon */}
        <div className="flex flex-row justify-end basis-1/4">
          
          {/* 'Like' toggle */}
          <div className="flex basis-1/2 text-white hover:text-groovyPink ease-linear duration-300 cursor-pointer">
            <HeartIcon className="w-5"/>
          </div>
          
          {/* Track time */}
          <div className="flex basis-1/4">
            <div className="flex flex-col justify-center text-groovyPurple">
              <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TrackListItem