import React from 'react';
import Image from 'next/image';
import { 
  HomeIcon, 
  LogoutIcon,
  ChevronDownIcon,
 } from "@heroicons/react/outline";

import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-row justify-between bg-groovyYellow border-black p-2 border-b-4 border-opacity-100">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Groovy Gorilla</h1>
      </div>
      
      <div className="flex flex-row space-x-2">
          <img className="rounded-full w-10 h-10 border-solid border-4 border-black" src={session?.user?.image} alt="" />
        <button className=" flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
          <h2>{session?.user.name}</h2>
          <LogoutIcon className="h-5 w-5"/>
        </button>
      </div>
    </div>
  )
}

export default Header;
