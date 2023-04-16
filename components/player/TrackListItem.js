import React from 'react'
import { ClockIcon, HeartIcon } from "@heroicons/react/outline";
import { FaPlay } from 'react-icons/fa';

function TrackListItem() {
  return (
    
    <div className="mx-4">
     
      <div className="flex flex-row p-2 cursor-default">
        <div className="flex justify-start basis-1/2 space-x-2">
          <div className="flex flex-col w-5 h-5 py-2.5">
            {/* TODO: onHover show play icon */}
            <div className="text-sm text-white hover:text-groovyPurple ease-linear duration-300 cursor-pointer">
              <FaPlay className="w-5 h-5"/>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <img className="w-10 h-auto" src="/gg-label.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center px-2">
              <div className="text-sm">
                <p>Song Title</p>
              </div>
              <div className="text-xs text-groovyPurple">
                <p>Artist Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center basis-1/4 text-xs m-y-auto text-groovyPurple">
          <p>Branch Sitters</p>
        </div>
       
        {/* TODO: onClick add to signed in user's playlist + change to solid Heart Icon */}
        <div className="flex flex-row justify-end basis-1/4">
          <div className="flex basis-1/2 text-white hover:text-groovyPink ease-linear duration-300 cursor-pointer">
            <HeartIcon className="w-5"/>
          </div>
          <div className="flex basis-1/4">
            <div className="flex flex-col justify-center text-groovyPurple">
              <p>3:00</p>
            </div>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default TrackListItem