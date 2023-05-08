import React from 'react'
import { IoIosSkipBackward,
          IoIosSkipForward,
          IoIosPlayCircle,
} from 'react-icons/io';

function PlayerControls() {
  return (
    <div className="flex-none">
      <div className="flex flex-row justify-center space-x-2">
        <div className="flex flex-col justify-center"><IoIosSkipBackward className='w-8 h-8 hover:text-groovyPurple ease-out duration-500 cursor-pointer'/></div>
        <div className="flex flex-none justify-center"><IoIosPlayCircle className='w-14 h-14 hover:text-groovyPurple ease-out duration-500 cursor-pointer'/></div>
        {/* <div className="flex flex-col justify-center"><PauseIcon className='w-10'/></div> */}
        <div className="flex flex-col justify-center"><IoIosSkipForward className='w-8 h-8 hover:text-groovyPurple ease-out duration-500 cursor-pointer'/></div>
        {/* Track Progress Bar */}
      </div> 
    </div>
  )
}

export default PlayerControls