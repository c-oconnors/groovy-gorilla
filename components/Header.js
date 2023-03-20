import React from 'react';
import Image from 'next/image';
import groovyProfilePlain from '../public/gg-profile-no-text.png';

function Header() {
  return (
    <div className="flex items-center bg-groovyYellow p-5 border-black border-4 border-opacity-100">

        <Image className="rounded-full m-0 p-0 w-20 h-20 border-solid border-4 border-black border-opacity-100" src={groovyProfilePlain} alt="Groovy Gorilla Profile Pic"/>
      <div>
        <h1 className="text-3xl font-bold">Groovy Gorilla</h1>
      </div>
    </div>
  )
}

export default Header;
