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
    
    <div className="mx-4">
      
      <div className="flex flex-row p-2 cursor-default">
        <div className="flex justify-start basis-1/2 space-x-2">
          <div className="flex flex-col w-5 h-5 py-2.5">
            {/* TODO: onHover show play icon */}
            {/* <div className="text-sm text-white hover:text-groovyPurple ease-linear duration-300 cursor-pointer">
              <FaPlay className="w-5 h-5"/>
            </div> */}
            <div className="text-sm text-black">
              <p>{order +1}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <img className="w-10 h-auto" src={track.track.album.images[0].url} alt="" />
            </div>
            <div className="flex flex-col justify-center px-2">
              <div className="text-sm">
                <p>{track.track.name}</p>
              </div>
              <div className="text-xs text-groovyPurple">
                <p>{track.track.artists[0].name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center basis-1/4 text-xs m-y-auto text-groovyPurple">
          <p>{track.track.album.name}</p>
        </div>
       
        {/* TODO: onClick add to signed in user's playlist + change to solid Heart Icon */}
        <div className="flex flex-row justify-end basis-1/4">
          <div className="flex basis-1/2 text-white hover:text-groovyPink ease-linear duration-300 cursor-pointer">
            <HeartIcon className="w-5"/>
          </div>
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