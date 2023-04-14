import React from 'react'
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  FastForwardIcon,
  ReplyIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  VolumeDownIcon,
  VolumeMuteIcon,
  RewindIcon,
} from '@heroicons/react/solid';
import { IoIosSkipBackward,
          IoIosSkipForward,
          IoIosPlay,
} from 'react-icons/io';

function PlayerControls() {
  return (
    <div>
      <div className="flex flex-row m-2 justify-center space-x-2">
        <div className="flex flex-col justify-center border-4 w-15 h-15"><IoIosSkipBackward className='w-10 h-10 hover:bg-groovyPurple ease-out duration-500 cursor-pointer'/></div>
        <div className="flex flex-col justify-center border-4 w-15 h-15"><IoIosPlay className='w-10 h-10 hover:bg-groovyPurple ease-out duration-500 cursor-pointer'/></div>
        {/* <div className="flex flex-col justify-center"><PauseIcon className='w-10'/></div> */}
        <div className="flex flex-col justify-center border-4 w-15 h-15"><IoIosSkipForward className='w-10 h-10 hover:bg-groovyPurple ease-out duration-500 cursor-pointer'/></div>
      </div> 
    </div>
  )
}

export default PlayerControls