import React from 'react';
import { FaCompactDisc, FaHashtag, FaClock, FaMusic } from 'react-icons/fa';
import { ClockIcon, HeartIcon } from "@heroicons/react/outline";
import TrackListItem from './TrackListItem';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../../atoms/playlistAtom';

function TrackList() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="flex flex-col justify-start overflow-auto bg-none">
      <div className="basis-2/12 mx-4 border-none">
          <div className="flex flex-row p-2 border-b-4 bg-none">
            <div className="flex justify-start basis-1/2 space-x-2">
              <div className='invisible'>
                <FaHashtag className="w-5 h-5"/>
              </div>
              <div>
                <FaMusic className="w-5 h-5"/>
              </div>
            </div>
            <div className="basis-1/4">
              <FaCompactDisc className="w-5 h-5"/>
            </div>
            <div className="flex flex-row justify-end text-black basis-1/4">
              <div className="flex basis-1/2">
                {/* <HeartIcon className="w-5"/> */}
              </div>
              <div className="flex basis-1/4"><FaClock className="w-5 h-5"/></div>
            </div>
          </div>
        
      </div>
      {/* TODO: map through tracks */}
      <div className="basis-10/12 overflow-auto scrollbar-hide">
        <div className="flex flex-col">
        {playlist?.tracks?.items?.map((track, i) => (
          <TrackListItem key={track.track.id} track={track} order={i} />
        ))}
        </div>
      </div>
       
      
    </div>
  )
}

export default TrackList