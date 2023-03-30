// Center of the app, where the user can play music
import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { ClockIcon, HeartIcon } from "@heroicons/react/outline";
import PlayerControls from './PlayerControls';

function Player() {
  const { data: session, status } = useSession();
  return (
    <div className="bg-white border-black border-4 border-opacity-100 shadow-groovy m-4 h-full">
      <div className="bg-groovyPink border-b-4 px-1 pt-1">
        <div className='flex justify-between'>
          <h1>Mixtape Title</h1>{/* Load Mixtape title */}
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-60 md:w-auto h-auto border-4 m-5" src="/gg-label.jpg" alt="" />
        <div className="flex flex-col justify-center">
          {/* <h1>Song Title</h1>
          <h2>Artist Name</h2> */}
        </div>
      </div>
      {/* <div>Mixtape list</div> */}
      <div className="mx-4">
        <div className="flex flex-row p-2 border-b-4">
          <div className="flex justify-start basis-1/2 space-x-2">
            <div>#</div>
            <div>Title</div>
          </div>
          <div className="basis-1/4">Album</div>
          <div className="flex flex-row justify-end text-black basis-1/4">
            <div className="flex basis-1/2">
              {/* <HeartIcon className="w-5"/> */}
            </div>
            <div className="flex basis-1/4"><ClockIcon className="w-5"/></div>
          </div>
        </div>
      </div>
      {/* Track Item */}
      <div className="mx-4">
        <div className="flex flex-row p-2 hover:bg-groovyBlue">
          <div className="flex justify-start basis-1/2 space-x-2">
            <div className="flex flex-col justify-center">
              <p>1</p>
            </div>
            <div className="flex flex-row">
              <div>
                <img className="w-10 h-auto" src="/gg-label.jpg" alt="" />
              </div>
              <div className="flex flex-col justify-center px-2">
                <div className="text-sm"><p>Song Title</p></div>
                <div className="text-xs"><p>Artist Name</p></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center basis-1/4 text-xs m-y-auto">
            <p>Branch Sitters</p>
          </div>
          <div className="flex flex-row justify-end text-black basis-1/4">
            <div className="flex basis-1/2"><HeartIcon className="w-5"/></div>
            <div className="flex basis-1/4">
              <div className="flex flex-col justify-center">
                <p>3:00</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* Track Item: END */}
      
      {/* <div>Artist Info</div> */}

      <div>
          <PlayerControls />
      </div>
    </div>
  )
}

export default Player